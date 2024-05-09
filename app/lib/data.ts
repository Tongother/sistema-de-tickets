export async function fetchUsersTable() {

    try{

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/client`, {method: "GET"});
        const data = await res.json();

        return data;

    }catch(error){
    }
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