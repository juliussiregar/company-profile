"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

const Sertification = () => {
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
            <div className='ml-32 mr-32 text-center font-bold mt-8 mb-8 xl:text-6xl md:text-4xl sm:text-2xl'>SYARAT SERTIFIKASI</div>
            <div data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom">
                <div className="mt-8 ml-8 mr-8">
                    {/* Button untuk POP */}
                    <div className="mb-12">
                        <button onClick={() => toggleTable('POP')} className={`font-semibold text-white px-4 py-2 rounded focus:outline-none flex justify-between items-center w-full ${showPOP ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-500 hover:bg-gray-600'}`}>
                            <span>Persyaratan Pengawas Operasional Pertama (POP) di Bidang Pertambangan Mineral dan Batubara</span>
                            <div className="ml-2 text-xl"
                                style={{ transition: 'transform 300ms', transform: showPOP ? 'rotate(180deg)' : 'rotate(0deg)' }}><BsChevronDown /></div>          </button>
                        {showPOP && (
                            <table className="table-auto w-full mt-4" style={{ minWidth: '300px', maxWidth: '800px' }}>
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2">#</th>
                                        <th className="px-4 py-2">Syarat POP Bidang Pertambangan Mineral dan Batubara</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {popData.map((unit, index) => (
                                        <tr key={index}>
                                            <td className="border px-4 py-2">{index + 1}</td>
                                            <td className="border px-4 py-2">{unit.Syarat}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>

                    {/* Button untuk POM */}
                    <div className="mb-12">
                        <button onClick={() => toggleTable('POM')} className={`font-semibold text-white px-4 py-2 rounded focus:outline-none flex justify-between items-center w-full ${showPOM ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-500 hover:bg-gray-600'}`}>
                            <span>Persyaratan Pengawas Operasional Madya (POM) di Bidang Pertambangan Mineral dan Batubara</span>
                            <div className="ml-2 text-xl"
                                style={{ transition: 'transform 300ms', transform: showPOP ? 'rotate(180deg)' : 'rotate(0deg)' }}><BsChevronDown /></div>          </button>
                        {showPOM && (
                            <table className="table-auto w-full mt-4" style={{ minWidth: '300px', maxWidth: '800px' }}>
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2">#</th>
                                        <th className="px-4 py-2">Syarat POM Bidang Pertambangan Mineral dan Batubara</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pomData.map((unit, index) => (
                                        <tr key={index}>
                                            <td className="border px-4 py-2">{index + 1}</td>
                                            <td className="border px-4 py-2">{unit.Syarat}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>

                    {/* Button untuk POU */}
                    <div>
                        <button onClick={() => toggleTable('POU')} className={`font-semibold text-white px-4 py-2 rounded focus:outline-none flex justify-between items-center w-full ${showPOU ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-gray-500 hover:bg-gray-600'}`}>
                            <span>Persyaratan Pengawas Operasional Utama (POU) di Bidang Pertambangan Mineral dan Batubara</span>
                            <div className="ml-2 text-xl"
                                style={{ transition: 'transform 300ms', transform: showPOP ? 'rotate(180deg)' : 'rotate(0deg)' }}><BsChevronDown /></div>          </button>
                        {showPOU && (
                            <table className="table-auto w-full mt-4" style={{ minWidth: '300px', maxWidth: '800px' }}>
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2">#</th>
                                        <th className="px-4 py-2">Syarat POU Bidang Pertambangan Mineral dan Batubara</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pouData.map((unit, index) => (
                                        <tr key={index}>
                                            <td className="border px-4 py-2">{index + 1}</td>
                                            <td className="border px-4 py-2">{unit.Syarat}</td>
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
                className="bg-[#F06B23] mt-12 h-16 w-40 text-white py-1 px-3 rounded-full flex hover:bg-opacity-80  justify-center items-center text-xl"
            >
                Contact Us
            </Link>
            <div data-aos="zoom-out-up">
                <div className='flex flex-row mt-16 gap-20 mb-36'>


                    <img src='./logo_bnsp.png' alt='logo bnsp sertifikasi' className='h-32' />
                    <img src='./logo_bnsp2.png' alt='logo bnsp sertifikasi 2' className='h-32' />
                </div>
            </div>
        </div>
    );
}

const popData = [
    { Syarat: "Melaksanakan Peraturan Perundang-undangan terkait Keselamatan Pertambangan" },
    { Syarat: "Melaksanakan Tugas dan Tanggung Jawab Keselamatan Pertambangan pada Area yang menjadi Tanggung Jawabnya" },
    { Syarat: "Melaksanakan Pertemuan Keselamatan Pertambangan Terencana" },
    { Syarat: "Melaksanakan Investigasi Kecelakaan" },
    { Syarat: "Melaksanakan Identifikasi Bahaya dan Pengendalian" },
    { Syarat: "Melaksanakan Peraturan Perundang-undangan terkait Perlindungan Lingkun" },
    { Syarat: "Melaksanakan Inspeksi" },
    { Syarat: "Melaksanakan Analisis Keselamatan Pekerjaan" },
];

const pomData = [
    { Syarat: "Melaksanakan Tugas dan Tanggung Jawab sebagai Pengawas Operasional Madya (POM)" },
    { Syarat: "Mengelola Keselamatan Pertambangan" },
    { Syarat: "Mengelola Lingkungan Pertambangan" },
    { Syarat: "Mengelola Keadaan Darurat Pertambangan" },
    { Syarat: "Melaksanakan Upaya Penerapan Konservasi Mineral dan Batubara" },
    { Syarat: "Mengelola Penerapan Kaidah Teknis Pertambangan Mineral dan Batubara" },
    { Syarat: "Mengawasi Kegiatan Usaha Jasa Pertambangan Mineral dan Batubara" },
    { Syarat: "Mengawasi Standardisasi Pertambangan Mineral dan Batubara" },
];

const pouData = [
    { Syarat: "Melaksanakan Tugas dan Tanggung Jawab sebagai Pengawas Operasional Utama (POU)" },
    { Syarat: "Melakukan Pengelolaan Keselamatan Pertambangan Mineral dan Batubara" },
    { Syarat: "Mengelola Perlindungan Lingkungan Pertambangan" },
    { Syarat: "Mengelola Konservasi Mineral dan Batubara" },
    { Syarat: "Mengevaluasi Penerapan Kaidah Teknis Pertambangan Mineral dan Batubara" },
    { Syarat: "Mengelola Kegiatan Usaha Jasa Pertambangan Mineral dan Batubara" },
    { Syarat: "Mengelola Standardisasi Pertambangan Mineral dan Batubara" },
];

export default Sertification;
