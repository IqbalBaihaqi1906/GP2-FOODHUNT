import axios from 'axios';
import React from 'react'

const ModalCheckout = (props) => {
    const [form, setForm] = React.useState({});

    const formHandler = e => {
        let {value, name} = e.target;

        setForm({
            ...form,
            [name]: value
        });
    }

    const submitHandler = async e => {
        e.preventDefault();
        await axios.post('https://6131f19fab7b1e001799b262.mockapi.io/orders', {
            ...form,
            order: [...props.order],
            approved: false
        });
        alert('Pesanan diterima, tunggu pesan kami di Whatsapp');
        window.location.reload();
    }

    return (
        <div className="modalBg w-screen h-screen top-0 fixed flex justify-center items-center">
            <div className="modalCont w-1/2 h-4/5 items-center bg-gray-200 shadow-lg flex flex-col p-4 gap-y-4 rounded-md">
                <form onSubmit={submitHandler} className="w-4/5 m-4 p-4 bg-white rounded shadow-xl gap-y-2 h-full flex flex-col gap-y-2">
                    <div className="header flex">
                        <p className="text-gray-800 font-medium w-1/2">Informasi Pembelian</p>
                        <p className="text-right font-semibold text-2xl cursor-pointer w-1/2" onClick={() => props.closeModal(false)}> X </p>
                    </div>  

                    <div className="mt-2 flex flex-col gap-y-2">
                        <label className="block text-sm text-gray-00">Nama Lengkap</label>
                        <input name="name" onChange={formHandler} className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded " />
                    </div>

                    <div className="mt-2 flex flex-col gap-y-2">
                        <label className="block text-sm text-gray-00">Alamat</label>
                        <input name="address" onChange={formHandler} className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded " />
                    </div>

                    <div className="mt-2 flex flex-col gap-y-2">
                        <label className="block text-sm text-gray-00">No Rekening</label>
                        <input name="account" onChange={formHandler} className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded "/>
                    </div>
                    
                    <div className="mt-2 flex flex-col gap-y-2">
                        <label className="block text-sm text-gray-00">No Telefon</label>
                        <input name="phone" onChange={formHandler} className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded "/>
                    </div>

                    <div className="btn self-end mt-8">
                        <input type="submit" value="Submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalCheckout
