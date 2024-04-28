export async function fetchUsersTable() {
    try {
        const res = await fetch("https://windcodeinc.me/api/client", {next: {revalidate:60}});
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("Failed to fetch data: ", error);
    }
}

export async function fetchHistoryTable() {
    try {
        const res = await fetch("http://localhost:3000/api/history" , {method: "GET"},);
        const data = await res.json();

        return data;
    } catch (error) {
        console.log("Failed to fetch data: ", error);
    }
}