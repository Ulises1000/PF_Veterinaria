import React from "react";

export default function Modal(obj) {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <button
                className="bg-violet-400 text-white active:bg-violet-200 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Leer mas
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div
                                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div
                                    className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        {obj.title}
                                    </h3>
                                    <button
                                        className="text-white rounded-xl bg-red-400 font-bold uppercase py-2 px-3 text-sm outline-none focus:outline-none float-right ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        X
                                    </button>
                                    {/* <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                     X
                    </span>
                  </button> */}
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                        Para tu mascota, una dieta saludable debe incluir alimentos balanceados y
                                        específicos para su especie y tamaño. Consulta a un veterinario para que te
                                        ayude a crear un plan de alimentación adecuado. También es importante
                                        proporcionarle agua fresca y limpia en todo momento. Además, asegúrate de
                                        brindarle suficiente ejercicio diario para mantenerlo activo y saludable. Un
                                        consejo adicional sería llevar a tu mascota regularmente al veterinario para
                                        chequeos y cuidados preventivos.
                                    </p>
                                </div>
                                {/*footer*/}

                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}