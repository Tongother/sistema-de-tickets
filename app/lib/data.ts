export async function fetchUsersTable() {
    try {
        const res = await fetch("http://windcodeinc.me/api/client");
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("Failed to fetch data: ", error);
    }
}