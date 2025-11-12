// api/base44Client.js

// ✅ Load environment variables
const BASE44_BASE_URL = process.env.NEXT_PUBLIC_BASE44_BASE_URL;
const BASE44_API_KEY = process.env.NEXT_PUBLIC_BASE44_API_KEY;

// ✅ Base44 Client
export const base44 = {
  entities: {
    ContactSubmission: {
      // Create a new submission
      async create(formData) {
        try {
          const response = await fetch(`${BASE44_BASE_URL}/ContactSubmission`, {
            method: "POST",
            headers: {
              api_key: BASE44_API_KEY,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });

          if (!response.ok) {
            throw new Error(`Base44 API Error: ${response.status}`);
          }

          return await response.json();
        } catch (error) {
          console.error("Error creating ContactSubmission:", error);
          throw error;
        }
      },

      // Read all submissions
      async readAll() {
        try {
          console.log("BASE URL:", process.env.NEXT_PUBLIC_BASE44_BASE_URL);

          const response = await fetch(`${BASE44_BASE_URL}/ContactSubmission`, {
            headers: {
              api_key: BASE44_API_KEY,
              "Content-Type": "application/json",
            },
          });

          if (!response.ok) {
            throw new Error(`Base44 API Error: ${response.status}`);
          }

          return await response.json();
        } catch (error) {
          console.error("Error fetching ContactSubmission:", error);
          throw error;
        }
      },

      // Update a submission
      async update(entityId, updateData) {
        try {
          const response = await fetch(
            `${BASE44_BASE_URL}/ContactSubmission/${entityId}`,
            {
              method: "PUT",
              headers: {
                api_key: BASE44_API_KEY,
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updateData),
            }
          );

          if (!response.ok) {
            throw new Error(`Base44 API Error: ${response.status}`);
          }

          return await response.json();
        } catch (error) {
          console.error("Error updating ContactSubmission:", error);
          throw error;
        }
      },
    },
  },
};
