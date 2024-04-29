export async function fetchUsersTable() {

        const res = await fetch("https://www.windcodeinc.me/api/client").then(res => res.json()).then(res => {
          if (res.error) {
            throw new Error(res.error)
          }
          return res
        })
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