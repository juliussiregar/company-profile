"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import logobnsp1 from "../../../public/logo_bnsp.png"
import logobnsp2 from "../../../public/logo_bnsp2.png"
import Image from 'next/image';

const Skema_Sertifikasi = () => {
    const [showPOP, setShowPOP] = useState(false);
    const [showPOM, setShowPOM] = useState(false);
    const [showPOU, setShowPOU] = useState(false);

    const toggleTable = (type: any) => {
        if (type === 'POP') setShowPOP(!showPOP);
        if (type === 'POM') setShowPOM(!showPOM);
        if (type === 'POU') setShowPOU(!showPOU);
    };

    return (
        <div className='w-screen h-auto bg-white flex flex-col items-center'>
            <div className='ml-32 mr-32 text-center font-bold xl:text-6xl md:text-4xl sm:text-2xl mt-8 mb-12 '>SKEMA SERTIFIKASI</div>
            <div data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom">

                <div className="mt-8 ml-8 mr-8 ">
                    {/* Button untuk POP */}
                    <div className="mb-12">
                        <button onClick={() => toggleTable('POP')} className={`font-semibold text-white px-4 py-2 rounded focus:outline-none flex justify-between items-center w-full ${showPOP ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-500 hover:bg-gray-600'}`}>
                            <span>Pengawas Operasional Pertama (POP) di Bidang Pertambangan Mineral dan Batubara</span>

                            <div className="ml-2 text-xl"
                                style={{ transition: 'transform 300ms', transform: showPOP ? 'rotate(180deg)' : 'rotate(0deg)' }}><BsChevronDown /></div>

                        </button>
                        {showPOP && (
                            <table className="table-auto w-full mt-4" style={{ minWidth: '300px', maxWidth: '800px' }}>
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2">#</th>
                                        <th className="px-4 py-2">Kode Unit</th>
                                        <th className="px-4 py-2">Judul Unit Kompetensi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {popData.map((unit, index) => (
                                        <tr key={index}>
                                            <td className="border px-4 py-2">{index + 1}</td>
                                            <td className="border px-4 py-2">{unit.kode}</td>
                                            <td className="border px-4 py-2">{unit.judul}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>

                    {/* Button untuk POM */}
                    <div className="mb-12">
                        <button onClick={() => toggleTable('POM')} className={`font-semibold text-white px-4 py-2 rounded focus:outline-none flex justify-between items-center w-full ${showPOM ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-500 hover:bg-gray-600'}`}>
                            <span>Pengawas Operasional Madya (POM) di Bidang Pertambangan Mineral dan Batubara</span>
                            <div className="ml-2 text-xl"
                                style={{ transition: 'transform 300ms', transform: showPOP ? 'rotate(180deg)' : 'rotate(0deg)' }}><BsChevronDown /></div>
                        </button>
                        {showPOM && (
                            <table className="table-auto w-full mt-4" style={{ minWidth: '300px', maxWidth: '800px' }}>
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2">#</th>
                                        <th className="px-4 py-2">Kode Unit</th>
                                        <th className="px-4 py-2">Judul Unit Kompetensi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pomData.map((unit, index) => (
                                        <tr key={index}>
                                            <td className="border px-4 py-2">{index + 1}</td>
                                            <td className="border px-4 py-2">{unit.kode}</td>
                                            <td className="border px-4 py-2">{unit.judul}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>

                    {/* Button untuk POU */}
                    <div>
                        <button onClick={() => toggleTable('POU')} className={`font-semibold text-white px-4 py-2 rounded focus:outline-none flex justify-between items-center w-full ${showPOU ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-gray-500 hover:bg-gray-600'}`}>
                            <span>Pengawas Operasional Utama (POU) di Bidang Pertambangan Mineral dan Batubara</span>
                            <div className="ml-2 text-xl"
                                style={{ transition: 'transform 300ms', transform: showPOP ? 'rotate(180deg)' : 'rotate(0deg)' }}><BsChevronDown /></div>
                        </button>
                        {showPOU && (
                            <table className="table-auto w-full mt-4" style={{ minWidth: '300px', maxWidth: '800px' }}>
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2">#</th>
                                        <th className="px-4 py-2">Kode Unit</th>
                                        <th className="px-4 py-2">Judul Unit Kompetensi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pouData.map((unit, index) => (
                                        <tr key={index}>
                                            <td className="border px-4 py-2">{index + 1}</td>
                                            <td className="border px-4 py-2">{unit.kode}</td>
                                            <td className="border px-4 py-2">{unit.judul}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>


            <Link
                href="https://wa.me/+6285724919584"
                target="_blank"
                className="bg-[#F06B23] mt-12 h-16 w-40 text-white py-1 px-3 rounded-full  hover:bg-opacity-80 flex justify-center items-center"
            >
                Contact Us
            </Link>
            <div data-aos="zoom-out-up">
                <div className='flex flex-row mt-16 gap-20 mb-36'>
                    <Image src={logobnsp1} alt='logo bnsp sertifikasi' className='h-32 w-auto' style={{ maxWidth: '100%' }}/>
                    <Image src={logobnsp2} alt='logo bnsp sertifikasi 2' className='h-32 w-auto' style={{ maxWidth: '100%' }} />
                </div>
            </div>
        </div>
    );
}

const popData = [
    { kode: "PMB.PO02.001.01", judul: "Melaksanakan Peraturan Perundang-undangan terkait Keselamatan Pertambangan" },
    { kode: "PMB.PO02.002.01", judul: "Melaksanakan Tugas dan Tanggung Jawab Keselamatan Pertambangan pada Area yang menjadi Tanggung Jawabnya" },
    { kode: "PMB.PO02.003.01", judul: "Melaksanakan Pertemuan Keselamatan Pertambangan Terencana" },
    { kode: "PMB.PO02.004.01", judul: "Melaksanakan Investigasi Kecelakaan" },
    { kode: "PMB.PO02.005.01", judul: "Melaksanakan Identifikasi Bahaya dan Pengendalian" },
    { kode: "PMB.PO02.006.01", judul: "Melaksanakan Peraturan Perundang-undangan terkait Perlindungan Lingkun" },
    { kode: "PMB.PO02.007.01", judul: "Melaksanakan Inspeksi" },
    { kode: "PMB.PO02.008.01", judul: "Melaksanakan Analisis Keselamatan Pekerjaan" },
];

const pomData = [
    { kode: "PMB.PO02.009.01", judul: "Melaksanakan Tugas dan Tanggung Jawab sebagai Pengawas Operasional Madya (POM)" },
    { kode: "PMB.PO02.010.01", judul: "Mengelola Keselamatan Pertambangan" },
    { kode: "PMB.PO02.011.01", judul: "Mengelola Lingkungan Pertambangan" },
    { kode: "PMB.PO02.012.01", judul: "Mengelola Keadaan Darurat Pertambangan" },
    { kode: "PMB.PO02.013.01", judul: "Melaksanakan Upaya Penerapan Konservasi Mineral dan Batubara" },
    { kode: "PMB.PO02.014.01", judul: "Mengelola Penerapan Kaidah Teknis Pertambangan Mineral dan Batubara" },
    { kode: "PMB.PO02.015.01", judul: "Mengawasi Kegiatan Usaha Jasa Pertambangan Mineral dan Batubara" },
    { kode: "PMB.PO02.016.01", judul: "Mengawasi Standardisasi Pertambangan Mineral dan Batubara" },
];

const pouData = [
    { kode: "PMB.PO02.017.01", judul: "Melaksanakan Tugas dan Tanggung Jawab sebagai Pengawas Operasional Utama (POU)" },
    { kode: "PMB.PO02.018.01", judul: "Melakukan Pengelolaan Keselamatan Pertambangan Mineral dan Batubara" },
    { kode: "PMB.PO02.019.01", judul: "Mengelola Perlindungan Lingkungan Pertambangan" },
    { kode: "PMB.PO02.020.01", judul: "Mengelola Konservasi Mineral dan Batubara" },
    { kode: "PMB.PO02.021.01", judul: "Mengevaluasi Penerapan Kaidah Teknis Pertambangan Mineral dan Batubara" },
    { kode: "PMB.PO02.022.01", judul: "Mengelola Kegiatan Usaha Jasa Pertambangan Mineral dan Batubara" },
    { kode: "PMB.PO02.023.01", judul: "Mengelola Standardisasi Pertambangan Mineral dan Batubara" },
];

export default Skema_Sertifikasi;
