export async function fetchClientTable() {

    try{

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/client`, {method: "GET"});
        const data = await res.json();
        return data.clientes;

    }catch(error){
    }
}

export async function fetchAdvisorTable() {

    try{

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/advisor`, {method: "GET"});
        const data = await res.json();
        return data.asesor;

    }catch(error){
        console.log("Failed to fetch data: ", error);
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


export async function fetchProfile() {
    try{
        const res = await fetch (`${process.env.NEXT_PUBLIC_API_URL}/profile`);
        const data = await res.json();

        return data;
    } 
    catch(error){
        console.log("Error fetching data:", error);
    }
}


export async function fetchPromedios() {
    try{
        const res = await fetch (`${process.env.NEXT_PUBLIC_API_URL}/analytics`);
        const data = await res.json();
        return data;
    } 
    catch(error){
        console.log("Error fetching data:", error);
    }
}

export async function fetchCalificacionesData() {
    try{
        const res = await fetch (`${process.env.NEXT_PUBLIC_API_URL}/calificion`);
        const data = await res.json();

        return data;
    } 
    catch(error){
        console.log("Error fetching data:", error);
    }
}