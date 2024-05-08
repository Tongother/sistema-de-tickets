export async function fetchUsersTable() {

        const res = await fetch("https://www.windcodeinc.me/api/client");
        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }

        return data;
}

export async function fetchHistoryTable() {
    try {
        const res = await fetch("https://www.windcodeinc.me/api/history" , {method: "GET"},);
        const data = await res.json();

        return data;
    } catch (error) {
        console.log("Failed to fetch data: ", error);
    }
}