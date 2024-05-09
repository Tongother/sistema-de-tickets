export async function fetchUsersTable() {

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/client`, {method: "GET"});
        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }

        return data;
}

export async function fetchHistoryTable() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/history` , {method: "GET"},);
        const data = await res.json();

        return data;
    } catch (error) {
        console.log("Failed to fetch data: ", error);
    }
}