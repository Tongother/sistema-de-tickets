"use client";
export default function confirm() {

    const handleSendEmail = async () => {
        const response = await fetch('/api/route', {
            method: 'POST',
        })

        const data = await response.json();
        console.log(data);
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="max-w-md px-6 py-8 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-bold mb-4">Confirmación de Correo Electrónico</h2>
                <p className="text-gray-600 mb-6">Gracias por registrarte. Por favor, confirma tu correo electrónico para completar el proceso de registro.</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"onClick={handleSendEmail}>Reenviar Correo de Confirmación</button>
            </div>
        </div>
    )
}