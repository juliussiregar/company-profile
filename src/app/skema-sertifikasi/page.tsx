"use client"
import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

const Skema_Sertifikasi = () => {
  const [showPOP, setShowPOP] = useState(false);
  const [showPOM, setShowPOM] = useState(false);
  const [showPOU, setShowPOU] = useState(false);

  const toggleTable = (type) => {
    if (type === 'POP') setShowPOP(!showPOP);
    if (type === 'POM') setShowPOM(!showPOM);
    if (type === 'POU') setShowPOU(!showPOU);
  };

  return (
    <div className='w-screen h-screen bg-white flex flex-col items-center'>
      <div className='ml-32 mr-32 text-center font-bold text-6xl mt-8 mb-12'>SKEMA SERTIFIKASI</div>

      <div className="mt-8 ml-8 mr-8 overflow-x-auto">
        {/* Button untuk POP */}
        <div className="mb-12">
          <button onClick={() => toggleTable('POP')} className={`font-semibold bg-${showPOP ? 'blue' : 'gray'}-500 text-white px-4 py-2 rounded hover:bg-${showPOP ? 'blue' : 'gray'}-600 focus:outline-none flex justify-between items-center w-full`}>
            <span>Pengawas Operasional Pertama (POP) di Bidang Pertambangan Mineral dan Batubara</span>
            <BsChevronDown className={`ml-2 transition-transform duration-300 transform ${showPOP ? 'rotate-180' : 'rotate-0'}`} />
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
          <button onClick={() => toggleTable('POM')} className={`font-semibold bg-${showPOM ? 'green' : 'gray'}-500 text-white px-4 py-2 rounded hover:bg-${showPOM ? 'green' : 'gray'}-600 focus:outline-none flex justify-between items-center w-full`}>
            <span>Pengawas Operasional Madya (POM) di Bidang Pertambangan Mineral dan Batubara</span>
            <BsChevronDown className={`ml-2 transition-transform duration-300 transform ${showPOM ? 'rotate-180' : 'rotate-0'}`} />
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
          <button onClick={() => toggleTable('POU')} className={`font-semibold bg-${showPOU ? 'yellow' : 'gray'}-500 text-white px-4 py-2 rounded hover:bg-${showPOU ? 'yellow' : 'gray'}-600 focus:outline-none flex justify-between items-center w-full`}>
            <span>Pengawas Operasional Utama (POU) di Bidang Pertambangan Mineral dan Batubara</span>
            <BsChevronDown className={`ml-2 transition-transform duration-300 transform ${showPOU ? 'rotate-180' : 'rotate-0'}`} />
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
      <a
            href="https://wa.me/+6285724919584"
            target="_blank"
            className="bg-[#F06B23] mt-12 h-16 w-40 text-white py-1 px-3 rounded-full mt-4 inline-block hover:bg-opacity-80 flex justify-center items-center"
            >
            Contact Us
            </a>
      <div className='flex flex-row mt-16 gap-20 mb-4'>
      <img src='./logo_bnsp.png' alt='logo bnsp sertifikasi' className='h-32' /> 
      <img src='./logo_bnsp2.png' alt='logo bnsp sertifikasi 2' className='h-32' /> 
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
