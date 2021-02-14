const data = [
  {
    id: "data_1",
    file_type: "jpg",
    url:
      "https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    thumbnailURL:
      "https://drive.google.com/uc?export=view&id=1z5GxqNWChxNUvUJ_CXeZA4ZEsS_tK6b5",
  },
  {
    id: "data_2",
    file_type: "pdf",
    url:
      "https://services.google.com/fh/files/misc/google_2019-environmental-report.pdf",
    thumbnailURL:
      "https://drive.google.com/uc?export=view&id=1pPEGmmDnDw3t7x7EreAyjA7lRv9LyvKj",
  },
  {
    id: "data_3",
    file_type: "jpg",
    url:
      "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    thumbnailURL:
      "https://drive.google.com/uc?export=view&id=1MB311RhxFC3wVm8KwPiteYlvhl4Q9MUd",
  },
  {
    id: "data_4",
    file_type: "pdf",
    url:
      "https://dfc-data-production.s3.amazonaws.com/files/ti/thi/THI-000137/JavaScript_Dev_I_Cert_Prep_MOD_1.pdf",
    thumbnailURL:
      "https://drive.google.com/uc?export=view&id=1am-rYe69XAJkyL0ujc0H6XvO7Id9xAoq",
  },
  {
    id: "data_5",
    file_type: "txt",
    url: "https://www.w3.org/MarkUp/draft-ietf-iiir-html-01.txt",
    thumbnailURL:
      "https://drive.google.com/uc?export=view&id=1Ts-bdNAleiqe_9Hy5mtYJk0lPT4J-xCq",
  },
  {
    id: "data_6",
    file_type: "txt",
    url: "https://www.cl.cam.ac.uk/~ek358/learner_summaries/data/B2/4.txt",
    thumbnailURL:
      "https://drive.google.com/uc?export=view&id=1dq314nos5eQZPIquZ_RBCSvPBvsjzF37",
  },
  {
    id: "data_7",
    file_type: "doc",
    url:
      "https://www.google.com/url?client=internal-element-cse&cx=partner-pub-9634067433254658:9653363797&q=https://www.ohchr.org/EN/HRBodies/HRC/RegularSessions/Session25/Documents/A-HRC-25-29_en.doc&sa=U&ved=2ahUKEwit1P76iubuAhXBgeYKHWPjBX0QFjAAegQIAxAB&usg=AOvVaw0eQR8MDc-wrdEWEPs8RSQ2",
    thumbnailURL:
      "https://drive.google.com/uc?export=view&id=1-2WH5tZrIEtEX4gqOho_FSyZ528gWPSR",
  },
];

const getData = () => {
  return data.filter((d) => d);
};

export { getData };
