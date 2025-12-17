uid=1_0 RootWebArea "PHP Live Coding Test - Update and Move Data" url="https://elaborate-daifuku-6a647e.netlify.app/"
  uid=1_1 ignored
    uid=1_2 ignored
      uid=1_3 ignored
        uid=1_4 generic
          uid=1_5 heading "🚀 PHP Live Coding Test" level="1"
            uid=1_6 StaticText "🚀 PHP Live Coding Test"
              uid=1_7 InlineTextBox "🚀 PHP Live Coding Test"
          uid=1_8 paragraph
            uid=1_9 StaticText "Mengubah dan Memindahkan Data Berdasarkan ID"
              uid=1_10 InlineTextBox "Mengubah dan Memindahkan Data Berdasarkan ID"
        uid=1_11 ignored
          uid=1_12 ignored
            uid=1_13 heading "📋 Deskripsi Soal" level="2"
              uid=1_14 ignored
                uid=1_15 StaticText "📋"
                  uid=1_16 InlineTextBox "📋"
              uid=1_17 StaticText "Deskripsi Soal"
                uid=1_18 InlineTextBox "Deskripsi Soal"
            uid=1_19 paragraph
              uid=1_20 StaticText "Diberikan sebuah array "
                uid=1_21 InlineTextBox "Diberikan sebuah array "
              uid=1_22 code
                uid=1_23 StaticText "$people"
                  uid=1_24 InlineTextBox "$people"
              uid=1_25 StaticText " yang berisi daftar data orang. Tugas Anda adalah membuat fungsi yang dapat mengubah data berdasarkan ID dan memindahkannya ke posisi pertama dalam array."
                uid=1_26 InlineTextBox " yang berisi daftar data orang. Tugas Anda adalah membuat fungsi yang dapat "
                uid=1_27 InlineTextBox "mengubah data berdasarkan ID dan memindahkannya ke posisi pertama dalam array."
          uid=1_28 ignored
            uid=1_29 heading "🗂️ Struktur Data" level="2"
              uid=1_30 ignored
                uid=1_31 StaticText "🗂️"
                  uid=1_32 InlineTextBox "🗂️"
              uid=1_33 StaticText "Struktur Data"
                uid=1_34 InlineTextBox "Struktur Data"
            uid=1_35 ignored
              uid=1_36 paragraph
                uid=1_37 strong
                  uid=1_38 StaticText "Array $people berisi objek dengan properti:"
                    uid=1_39 InlineTextBox "Array $people berisi objek dengan properti:"
              uid=1_40 list
                uid=1_41 listitem level="1"
                  uid=1_42 ListMarker "• "
                    uid=1_43 ignored
                  uid=1_44 code
                    uid=1_45 StaticText "id"
                      uid=1_46 InlineTextBox "id"
                  uid=1_47 StaticText " - Identifier unik (integer)"
                    uid=1_48 InlineTextBox " - Identifier unik (integer)"
                uid=1_49 listitem level="1"
                  uid=1_50 ListMarker "• "
                    uid=1_51 ignored
                  uid=1_52 code
                    uid=1_53 StaticText "name"
                      uid=1_54 InlineTextBox "name"
                  uid=1_55 StaticText " - Nama lengkap (string)"
                    uid=1_56 InlineTextBox " - Nama lengkap (string)"
                uid=1_57 listitem level="1"
                  uid=1_58 ListMarker "• "
                    uid=1_59 ignored
                  uid=1_60 code
                    uid=1_61 StaticText "age"
                      uid=1_62 InlineTextBox "age"
                  uid=1_63 StaticText " - Usia (integer)"
                    uid=1_64 InlineTextBox " - Usia (integer)"
                uid=1_65 listitem level="1"
                  uid=1_66 ListMarker "• "
                    uid=1_67 ignored
                  uid=1_68 code
                    uid=1_69 StaticText "gender"
                      uid=1_70 InlineTextBox "gender"
                  uid=1_71 StaticText " - Jenis kelamin (string)"
                    uid=1_72 InlineTextBox " - Jenis kelamin (string)"
                uid=1_73 listitem level="1"
                  uid=1_74 ListMarker "• "
                    uid=1_75 ignored
                  uid=1_76 code
                    uid=1_77 StaticText "email"
                      uid=1_78 InlineTextBox "email"
                  uid=1_79 StaticText " - Email (string)"
                    uid=1_80 InlineTextBox " - Email (string)"
                uid=1_81 listitem level="1"
                  uid=1_82 ListMarker "• "
                    uid=1_83 ignored
                  uid=1_84 code
                    uid=1_85 StaticText "phone"
                      uid=1_86 InlineTextBox "phone"
                  uid=1_87 StaticText " - Nomor telepon (string)"
                    uid=1_88 InlineTextBox " - Nomor telepon (string)"
                uid=1_89 listitem level="1"
                  uid=1_90 ListMarker "• "
                    uid=1_91 ignored
                  uid=1_92 code
                    uid=1_93 StaticText "address"
                      uid=1_94 InlineTextBox "address"
                  uid=1_95 StaticText " - Alamat lengkap (string)"
                    uid=1_96 InlineTextBox " - Alamat lengkap (string)"
          uid=1_97 ignored
            uid=1_98 heading "💾 Data Awal" level="2"
              uid=1_99 ignored
                uid=1_100 StaticText "💾"
                  uid=1_101 InlineTextBox "💾"
              uid=1_102 StaticText "Data Awal"
                uid=1_103 InlineTextBox "Data Awal"
            uid=1_104 generic
              uid=1_105 generic
                uid=1_106 StaticText "PHP"
                  uid=1_107 InlineTextBox "PHP"
              uid=1_108 generic
                uid=1_109 code
                  uid=1_110 StaticText "<?php
$people = [
    [
        'id' => 1,
        'name' => 'Andi Saputra',
        'age' => 28,
        'gender' => 'Male',
        'email' => 'andi.saputra@example.com',
        'phone' => '081234567890',
        'address' => 'Jl. Merdeka No. 10, Jakarta',
    ],
    [
        'id' => 2,
        'name' => 'Rina Kartika',
        'age' => 32,
        'gender' => 'Female',
        'email' => 'rina.kartika@example.com',
        'phone' => '082345678901',
        'address' => 'Jl. Sudirman No. 22, Bandung',
    ],
    [
        'id' => 3,
        'name' => 'Budi Hartono',
        'age' => 40,
        'gender' => 'Male',
        'email' => 'budi.hartono@example.com',
        'phone' => '083456789012',
        'address' => 'Jl. Diponegoro No. 5, Surabaya',
    ],
    [
        'id' => 4,
        'name' => 'Sari Wulandari',
        'age' => 25,
        'gender' => 'Female',
        'email' => 'sari.wulandari@example.com',
        'phone' => '084567890123',
        'address' => 'Jl. Gajah Mada No. 17, Yogyakarta',
    ],
];
?>"
                    uid=1_111 InlineTextBox "<?php"
                    uid=1_112 InlineTextBox "
"
                    uid=1_113 InlineTextBox "$people = ["
                    uid=1_114 InlineTextBox "
"
                    uid=1_115 InlineTextBox "    ["
                    uid=1_116 InlineTextBox "
"
                    uid=1_117 InlineTextBox "        'id' => 1,"
                    uid=1_118 InlineTextBox "
"
                    uid=1_119 InlineTextBox "        'name' => 'Andi Saputra',"
                    uid=1_120 InlineTextBox "
"
                    uid=1_121 InlineTextBox "        'age' => 28,"
                    uid=1_122 InlineTextBox "
"
                    uid=1_123 InlineTextBox "        'gender' => 'Male',"
                    uid=1_124 InlineTextBox "
"
                    uid=1_125 InlineTextBox "        'email' => 'andi.saputra@example.com',"
                    uid=1_126 InlineTextBox "
"
                    uid=1_127 InlineTextBox "        'phone' => '081234567890',"
                    uid=1_128 InlineTextBox "
"
                    uid=1_129 InlineTextBox "        'address' => 'Jl. Merdeka No. 10, Jakarta',"
                    uid=1_130 InlineTextBox "
"
                    uid=1_131 InlineTextBox "    ],"
                    uid=1_132 InlineTextBox "
"
                    uid=1_133 InlineTextBox "    ["
                    uid=1_134 InlineTextBox "
"
                    uid=1_135 InlineTextBox "        'id' => 2,"
                    uid=1_136 InlineTextBox "
"
                    uid=1_137 InlineTextBox "        'name' => 'Rina Kartika',"
                    uid=1_138 InlineTextBox "
"
                    uid=1_139 InlineTextBox "        'age' => 32,"
                    uid=1_140 InlineTextBox "
"
                    uid=1_141 InlineTextBox "        'gender' => 'Female',"
                    uid=1_142 InlineTextBox "
"
                    uid=1_143 InlineTextBox "        'email' => 'rina.kartika@example.com',"
                    uid=1_144 InlineTextBox "
"
                    uid=1_145 InlineTextBox "        'phone' => '082345678901',"
                    uid=1_146 InlineTextBox "
"
                    uid=1_147 InlineTextBox "        'address' => 'Jl. Sudirman No. 22, Bandung',"
                    uid=1_148 InlineTextBox "
"
                    uid=1_149 InlineTextBox "    ],"
                    uid=1_150 InlineTextBox "
"
                    uid=1_151 InlineTextBox "    ["
                    uid=1_152 InlineTextBox "
"
                    uid=1_153 InlineTextBox "        'id' => 3,"
                    uid=1_154 InlineTextBox "
"
                    uid=1_155 InlineTextBox "        'name' => 'Budi Hartono',"
                    uid=1_156 InlineTextBox "
"
                    uid=1_157 InlineTextBox "        'age' => 40,"
                    uid=1_158 InlineTextBox "
"
                    uid=1_159 InlineTextBox "        'gender' => 'Male',"
                    uid=1_160 InlineTextBox "
"
                    uid=1_161 InlineTextBox "        'email' => 'budi.hartono@example.com',"
                    uid=1_162 InlineTextBox "
"
                    uid=1_163 InlineTextBox "        'phone' => '083456789012',"
                    uid=1_164 InlineTextBox "
"
                    uid=1_165 InlineTextBox "        'address' => 'Jl. Diponegoro No. 5, Surabaya',"
                    uid=1_166 InlineTextBox "
"
                    uid=1_167 InlineTextBox "    ],"
                    uid=1_168 InlineTextBox "
"
                    uid=1_169 InlineTextBox "    ["
                    uid=1_170 InlineTextBox "
"
                    uid=1_171 InlineTextBox "        'id' => 4,"
                    uid=1_172 InlineTextBox "
"
                    uid=1_173 InlineTextBox "        'name' => 'Sari Wulandari',"
                    uid=1_174 InlineTextBox "
"
                    uid=1_175 InlineTextBox "        'age' => 25,"
                    uid=1_176 InlineTextBox "
"
                    uid=1_177 InlineTextBox "        'gender' => 'Female',"
                    uid=1_178 InlineTextBox "
"
                    uid=1_179 InlineTextBox "        'email' => 'sari.wulandari@example.com',"
                    uid=1_180 InlineTextBox "
"
                    uid=1_181 InlineTextBox "        'phone' => '084567890123',"
                    uid=1_182 InlineTextBox "
"
                    uid=1_183 InlineTextBox "        'address' => 'Jl. Gajah Mada No. 17, Yogyakarta',"
                    uid=1_184 InlineTextBox "
"
                    uid=1_185 InlineTextBox "    ],"
                    uid=1_186 InlineTextBox "
"
                    uid=1_187 InlineTextBox "];"
                    uid=1_188 InlineTextBox "
"
                    uid=1_189 InlineTextBox "?>"
              uid=1_190 button "📋"
                uid=1_191 StaticText "📋"
                  uid=1_192 InlineTextBox "📋"
          uid=1_193 ignored
            uid=1_194 heading "🎯 Tujuan & Spesifikasi Fungsi" level="2"
              uid=1_195 ignored
                uid=1_196 StaticText "🎯"
                  uid=1_197 InlineTextBox "🎯"
              uid=1_198 StaticText "Tujuan & Spesifikasi Fungsi"
                uid=1_199 InlineTextBox "Tujuan & Spesifikasi Fungsi"
            uid=1_200 ignored
              uid=1_201 paragraph
                uid=1_202 strong
                  uid=1_203 StaticText "Nama Fungsi:"
                    uid=1_204 InlineTextBox "Nama Fungsi:"
                uid=1_205 StaticText " "
                  uid=1_206 InlineTextBox " "
                uid=1_207 code
                  uid=1_208 StaticText "updateAndMoveToFront"
                    uid=1_209 InlineTextBox "updateAndMoveToFront"
            uid=1_210 heading "Fungsi Harus:" level="3"
              uid=1_211 StaticText "Fungsi Harus:"
                uid=1_212 InlineTextBox "Fungsi Harus:"
            uid=1_213 list
              uid=1_214 listitem level="1"
                uid=1_215 ignored
                  uid=1_216 StaticText "✓"
                    uid=1_217 InlineTextBox "✓"
                uid=1_218 StaticText "Fungsi harus bisa mengubah data berdasarkan ID"
                  uid=1_219 InlineTextBox "Fungsi harus bisa mengubah data berdasarkan ID"
              uid=1_220 listitem level="1"
                uid=1_221 ignored
                  uid=1_222 StaticText "✓"
                    uid=1_223 InlineTextBox "✓"
                uid=1_224 StaticText "Memindahkan data menjadi index ke-0 setelah diubah"
                  uid=1_225 InlineTextBox "Memindahkan data menjadi index ke-0 setelah diubah"
              uid=1_226 listitem level="1"
                uid=1_227 ignored
                  uid=1_228 StaticText "✓"
                    uid=1_229 InlineTextBox "✓"
                uid=1_230 StaticText "Mengembalikan hasil array yang sudah dimodifikasi"
                  uid=1_231 InlineTextBox "Mengembalikan hasil array yang sudah dimodifikasi"
          uid=1_232 ignored
            uid=1_233 heading "🧪 Contoh Penggunaan" level="2"
              uid=1_234 ignored
                uid=1_235 StaticText "🧪"
                  uid=1_236 InlineTextBox "🧪"
              uid=1_237 StaticText "Contoh Penggunaan"
                uid=1_238 InlineTextBox "Contoh Penggunaan"
            uid=1_239 generic
              uid=1_240 generic
                uid=1_241 StaticText "PHP"
                  uid=1_242 InlineTextBox "PHP"
              uid=1_243 generic
                uid=1_244 code
                  uid=1_245 StaticText "<?php
// Contoh data yang akan diubah
$newData = [
    'name' => 'Bagas Julianto',
    'age' => 40
];

// Memanggil fungsi untuk mengubah data dengan ID = 3
$people = updateAndMoveToFront($people, 3, $newData);

// Data dengan ID 3 sekarang berada di indeks pertama 
// dengan nama dan umur yang sudah diperbarui
?>"
                    uid=1_246 InlineTextBox "<?php"
                    uid=1_247 InlineTextBox "
"
                    uid=1_248 InlineTextBox "// Contoh data yang akan diubah"
                    uid=1_249 InlineTextBox "
"
                    uid=1_250 InlineTextBox "$newData = ["
                    uid=1_251 InlineTextBox "
"
                    uid=1_252 InlineTextBox "    'name' => 'Bagas Julianto',"
                    uid=1_253 InlineTextBox "
"
                    uid=1_254 InlineTextBox "    'age' => 40"
                    uid=1_255 InlineTextBox "
"
                    uid=1_256 InlineTextBox "];"
                    uid=1_257 InlineTextBox "
"
                    uid=1_258 InlineTextBox "
"
                    uid=1_259 InlineTextBox "// Memanggil fungsi untuk mengubah data dengan ID = 3"
                    uid=1_260 InlineTextBox "
"
                    uid=1_261 InlineTextBox "$people = updateAndMoveToFront($people, 3, $newData);"
                    uid=1_262 InlineTextBox "
"
                    uid=1_263 InlineTextBox "
"
                    uid=1_264 InlineTextBox "// Data dengan ID 3 sekarang berada di indeks pertama "
                    uid=1_265 InlineTextBox "
"
                    uid=1_266 InlineTextBox "// dengan nama dan umur yang sudah diperbarui"
                    uid=1_267 InlineTextBox "
"
                    uid=1_268 InlineTextBox "?>"
              uid=1_269 button "📋"
                uid=1_270 StaticText "📋"
                  uid=1_271 InlineTextBox "📋"
            uid=1_272 ignored
              uid=1_273 ignored
                uid=1_274 heading "📍 Data Original" level="4"
                  uid=1_275 StaticText "📍 Data Original"
                    uid=1_276 InlineTextBox "📍 Data Original"
                uid=1_277 paragraph
                  uid=1_278 StaticText "ID 3: Budi Hartono (40)"
                    uid=1_279 InlineTextBox "ID 3: Budi Hartono (40)"
                uid=1_280 paragraph
                  uid=1_281 StaticText "Posisi: Index ke-2"
                    uid=1_282 InlineTextBox "Posisi: Index ke-2"
              uid=1_283 generic
                uid=1_284 StaticText "➡️"
                  uid=1_285 InlineTextBox "➡️"
              uid=1_286 ignored
                uid=1_287 heading "✨ Setelah Update" level="4"
                  uid=1_288 StaticText "✨ Setelah Update"
                    uid=1_289 InlineTextBox "✨ Setelah Update"
                uid=1_290 paragraph
                  uid=1_291 StaticText "ID 3: Bagas Julianto (40)"
                    uid=1_292 InlineTextBox "ID 3: Bagas Julianto (40)"
                uid=1_293 paragraph
                  uid=1_294 StaticText "Posisi: Index ke-0"
                    uid=1_295 InlineTextBox "Posisi: Index ke-0"
          uid=1_296 ignored
            uid=1_297 heading "📌 Hasil yang Diharapkan" level="2"
              uid=1_298 ignored
                uid=1_299 StaticText "📌"
                  uid=1_300 InlineTextBox "📌"
              uid=1_301 StaticText "Hasil yang Diharapkan"
                uid=1_302 InlineTextBox "Hasil yang Diharapkan"
            uid=1_303 paragraph
              uid=1_304 StaticText "Setelah menjalankan fungsi dengan contoh data di atas, array "
                uid=1_305 InlineTextBox "Setelah menjalankan fungsi dengan contoh data di atas, array "
              uid=1_306 code
                uid=1_307 StaticText "$people"
                  uid=1_308 InlineTextBox "$people"
              uid=1_309 StaticText " akan menjadi:"
                uid=1_310 InlineTextBox " akan menjadi:"
            uid=1_311 generic
              uid=1_312 generic
                uid=1_313 StaticText "PHP"
                  uid=1_314 InlineTextBox "PHP"
              uid=1_315 generic
                uid=1_316 code
                  uid=1_317 StaticText "<?php
$people = [
    // Data yang diupdate dipindah ke indeks pertama
    [
        'id' => 3,
        'name' => 'Bagas Julianto',    // ← DIUBAH
        'age' => 40,                   // ← DIUBAH
        'gender' => 'Male',            // ← TETAP
        'email' => 'budi.hartono@example.com',     // ← TETAP
        'phone' => '083456789012',     // ← TETAP
        'address' => 'Jl. Diponegoro No. 5, Surabaya', // ← TETAP
    ],
    // Data lainnya bergeser ke bawah
    [
        'id' => 1,
        'name' => 'Andi Saputra',
        'age' => 28,
        'gender' => 'Male',
        'email' => 'andi.saputra@example.com',
        'phone' => '081234567890',
        'address' => 'Jl. Merdeka No. 10, Jakarta',
    ],
    [
        'id' => 2,
        'name' => 'Rina Kartika',
        'age' => 32,
        'gender' => 'Female',
        'email' => 'rina.kartika@example.com',
        'phone' => '082345678901',
        'address' => 'Jl. Sudirman No. 22, Bandung',
    ],
    [
        'id' => 4,
        'name' => 'Sari Wulandari',
        'age' => 25,
        'gender' => 'Female',
        'email' => 'sari.wulandari@example.com',
        'phone' => '084567890123',
        'address' => 'Jl. Gajah Mada No. 17, Yogyakarta',
    ],
];
?>"
                    uid=1_318 InlineTextBox "<?php"
                    uid=1_319 InlineTextBox "
"
                    uid=1_320 InlineTextBox "$people = ["
                    uid=1_321 InlineTextBox "
"
                    uid=1_322 InlineTextBox "    // Data yang diupdate dipindah ke indeks pertama"
                    uid=1_323 InlineTextBox "
"
                    uid=1_324 InlineTextBox "    ["
                    uid=1_325 InlineTextBox "
"
                    uid=1_326 InlineTextBox "        'id' => 3,"
                    uid=1_327 InlineTextBox "
"
                    uid=1_328 InlineTextBox "        'name' => 'Bagas Julianto',    // ← DIUBAH"
                    uid=1_329 InlineTextBox "
"
                    uid=1_330 InlineTextBox "        'age' => 40,                   // ← DIUBAH"
                    uid=1_331 InlineTextBox "
"
                    uid=1_332 InlineTextBox "        'gender' => 'Male',            // ← TETAP"
                    uid=1_333 InlineTextBox "
"
                    uid=1_334 InlineTextBox "        'email' => 'budi.hartono@example.com',     // ← TETAP"
                    uid=1_335 InlineTextBox "
"
                    uid=1_336 InlineTextBox "        'phone' => '083456789012',     // ← TETAP"
                    uid=1_337 InlineTextBox "
"
                    uid=1_338 InlineTextBox "        'address' => 'Jl. Diponegoro No. 5, Surabaya', // ← TETAP"
                    uid=1_339 InlineTextBox "
"
                    uid=1_340 InlineTextBox "    ],"
                    uid=1_341 InlineTextBox "
"
                    uid=1_342 InlineTextBox "    // Data lainnya bergeser ke bawah"
                    uid=1_343 InlineTextBox "
"
                    uid=1_344 InlineTextBox "    ["
                    uid=1_345 InlineTextBox "
"
                    uid=1_346 InlineTextBox "        'id' => 1,"
                    uid=1_347 InlineTextBox "
"
                    uid=1_348 InlineTextBox "        'name' => 'Andi Saputra',"
                    uid=1_349 InlineTextBox "
"
                    uid=1_350 InlineTextBox "        'age' => 28,"
                    uid=1_351 InlineTextBox "
"
                    uid=1_352 InlineTextBox "        'gender' => 'Male',"
                    uid=1_353 InlineTextBox "
"
                    uid=1_354 InlineTextBox "        'email' => 'andi.saputra@example.com',"
                    uid=1_355 InlineTextBox "
"
                    uid=1_356 InlineTextBox "        'phone' => '081234567890',"
                    uid=1_357 InlineTextBox "
"
                    uid=1_358 InlineTextBox "        'address' => 'Jl. Merdeka No. 10, Jakarta',"
                    uid=1_359 InlineTextBox "
"
                    uid=1_360 InlineTextBox "    ],"
                    uid=1_361 InlineTextBox "
"
                    uid=1_362 InlineTextBox "    ["
                    uid=1_363 InlineTextBox "
"
                    uid=1_364 InlineTextBox "        'id' => 2,"
                    uid=1_365 InlineTextBox "
"
                    uid=1_366 InlineTextBox "        'name' => 'Rina Kartika',"
                    uid=1_367 InlineTextBox "
"
                    uid=1_368 InlineTextBox "        'age' => 32,"
                    uid=1_369 InlineTextBox "
"
                    uid=1_370 InlineTextBox "        'gender' => 'Female',"
                    uid=1_371 InlineTextBox "
"
                    uid=1_372 InlineTextBox "        'email' => 'rina.kartika@example.com',"
                    uid=1_373 InlineTextBox "
"
                    uid=1_374 InlineTextBox "        'phone' => '082345678901',"
                    uid=1_375 InlineTextBox "
"
                    uid=1_376 InlineTextBox "        'address' => 'Jl. Sudirman No. 22, Bandung',"
                    uid=1_377 InlineTextBox "
"
                    uid=1_378 InlineTextBox "    ],"
                    uid=1_379 InlineTextBox "
"
                    uid=1_380 InlineTextBox "    ["
                    uid=1_381 InlineTextBox "
"
                    uid=1_382 InlineTextBox "        'id' => 4,"
                    uid=1_383 InlineTextBox "
"
                    uid=1_384 InlineTextBox "        'name' => 'Sari Wulandari',"
                    uid=1_385 InlineTextBox "
"
                    uid=1_386 InlineTextBox "        'age' => 25,"
                    uid=1_387 InlineTextBox "
"
                    uid=1_388 InlineTextBox "        'gender' => 'Female',"
                    uid=1_389 InlineTextBox "
"
                    uid=1_390 InlineTextBox "        'email' => 'sari.wulandari@example.com',"
                    uid=1_391 InlineTextBox "
"
                    uid=1_392 InlineTextBox "        'phone' => '084567890123',"
                    uid=1_393 InlineTextBox "
"
                    uid=1_394 InlineTextBox "        'address' => 'Jl. Gajah Mada No. 17, Yogyakarta',"
                    uid=1_395 InlineTextBox "
"
                    uid=1_396 InlineTextBox "    ],"
                    uid=1_397 InlineTextBox "
"
                    uid=1_398 InlineTextBox "];"
                    uid=1_399 InlineTextBox "
"
                    uid=1_400 InlineTextBox "?>"
              uid=1_401 button "📋"
                uid=1_402 StaticText "📋"
                  uid=1_403 InlineTextBox "📋"
          uid=1_404 ignored
            uid=1_405 heading "⚠️ Catatan Penting" level="2"
              uid=1_406 ignored
                uid=1_407 StaticText "⚠️"
                  uid=1_408 InlineTextBox "⚠️"
              uid=1_409 StaticText "Catatan Penting"
                uid=1_410 InlineTextBox "Catatan Penting"
            uid=1_411 ignored
              uid=1_412 list
                uid=1_413 listitem level="1"
                  uid=1_414 strong
                    uid=1_415 StaticText "🔒 Preservasi Data:"
                      uid=1_416 InlineTextBox "🔒 Preservasi Data:"
                  uid=1_417 StaticText " Data yang tidak ada dalam "
                    uid=1_418 InlineTextBox " Data yang tidak ada dalam "
                  uid=1_419 code
                    uid=1_420 StaticText "$newData"
                      uid=1_421 InlineTextBox "$newData"
                  uid=1_422 StaticText " harus tetap dipertahankan"
                    uid=1_423 InlineTextBox " harus tetap dipertahankan"
                uid=1_424 listitem level="1"
                  uid=1_425 strong
                    uid=1_426 StaticText "🔄 Fleksibilitas:"
                      uid=1_427 InlineTextBox "🔄 Fleksibilitas:"
                  uid=1_428 StaticText " Fungsi harus dapat menerima perubahan untuk field apapun (name, age, email, dll.)"
                    uid=1_429 InlineTextBox " Fungsi harus dapat menerima perubahan untuk field apapun (name, age, email, dll.)"
                uid=1_430 listitem level="1"
                  uid=1_431 strong
                    uid=1_432 StaticText "🎯 Partial Update:"
                      uid=1_433 InlineTextBox "🎯 Partial Update:"
                  uid=1_434 StaticText " Bisa mengubah hanya sebagian field, tidak harus semua"
                    uid=1_435 InlineTextBox " Bisa mengubah hanya sebagian field, tidak harus semua"
                uid=1_436 listitem level="1"
                  uid=1_437 strong
                    uid=1_438 StaticText "📍 Posisi:"
                      uid=1_439 InlineTextBox "📍 Posisi:"
                  uid=1_440 StaticText " Data yang diupdate WAJIB dipindah ke index ke-0"
                    uid=1_441 InlineTextBox " Data yang diupdate WAJIB dipindah ke index ke-0"
        uid=1_442 ignored
          uid=1_443 paragraph
            uid=1_444 StaticText "💡 "
              uid=1_445 InlineTextBox "💡 "
            uid=1_446 strong
              uid=1_447 StaticText "Tips:"
                uid=1_448 InlineTextBox "Tips:"
            uid=1_449 StaticText " Pikirkan tentang cara mencari data, mengubah data, dan mereorganisasi array dengan efisien!"
              uid=1_450 InlineTextBox " Pikirkan tentang cara mencari data, mengubah data, dan mereorganisasi array dengan efisien!"
