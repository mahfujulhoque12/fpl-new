import pic1 from "/public/portfolio/1.png";
import pic2 from "/public/portfolio/2.png";

import pic3 from "/public/portfolio/cons1.png";

import pic4 from "/public/portfolio/cons2.png";

import pic5 from "/public/portfolio/7.png";
import pic6 from "/public/portfolio/8.png";
import pic7 from "/public/portfolio/9.png";
import pic8 from "/public/portfolio/8.png";
import pic9 from "/public/portfolio/11.png";
import pic10 from "/public/portfolio/12.png";
import pic11 from "/public/portfolio/13.png";
import pic12 from "/public/portfolio/14.png";
import pic13 from "/public/portfolio/int1.png";
import pic14 from "/public/portfolio/int2.png";
import pic15 from "/public/portfolio/int3.png";

import pic16 from "/public/portfolio/int4.png";
import pic17 from "/public/portfolio/cons3.png";
import pic18 from "/public/portfolio/cons4.png";
import pic19 from "/public/portfolio/cons5.png";
import pic20 from "/public/portfolio/cons6.png";
import pic21 from "/public/portfolio/cons7.png";
import pic22 from "/public/portfolio/int4.png";
import pic28 from "/public/portfolio/int4.png";
import pic23 from "/public/portfolio/int5.png";
import pic24 from "/public/portfolio/int6.png";
import pic25 from "/public/portfolio/int7.png";
import pic26 from "/public/portfolio/int8.png";
import pic27 from "/public/portfolio/int9.png";
import pic40 from "/public/portfolio/int10.png";
import pic29 from "/public/portfolio/int11.png";
import pic30 from "/public/portfolio/int12.png";
import pic31 from "/public/portfolio/int13.png";
import pic32 from "/public/portfolio/int14.png";
import pic33 from "/public/portfolio/int15.png";
import pic34 from "/public/portfolio/int16.png";
import pic35 from "/public/portfolio/int17.png";
import pic36 from "/public/portfolio/int18.png";
import pic37 from "/public/portfolio/int19.png";
import pic38 from "/public/portfolio/int20.png";
import pic39 from "/public/portfolio/int21.png";
import pic41 from "/public/portfolio/int22.png";
import pic42 from "/public/portfolio/int23.png";
import pic43 from "/public/portfolio/int24.png";
import pic44 from "/public/portfolio/int25.png";
import pic45 from "/public/portfolio/int26.png";
import pic46 from "/public/portfolio/int27.png";
import pic47 from "/public/portfolio/int28.png";
import pic48 from "/public/portfolio/int29.png";
import pic49 from "/public/portfolio/int30.png";
import pic50 from "/public/portfolio/int31.png";
import pic51 from "/public/portfolio/int32.png";
import pic52 from "/public/portfolio/int33.png";
import pic53 from "/public/portfolio/int34.png";
import pic54 from "/public/portfolio/int35.png";
import pic55 from "/public/portfolio/int36.png";
import pic56 from "/public/portfolio/int37.png";
import pic57 from "/public/portfolio/int38.png";
import pic58 from "/public/portfolio/int39.png";
import pic59 from "/public/portfolio/int40.png";
import pic60 from "/public/portfolio/int41.png";
import pic61 from "/public/portfolio/int42.png";
import pic62 from "/public/portfolio/int43.png";
import pic63 from "/public/portfolio/int44.png";
import pic64 from "/public/portfolio/int45.png";
import pic65 from "/public/portfolio/int46.png";
import pic66 from "/public/portfolio/int47.png";
import pic67 from "/public/portfolio/int48.png";
import pic68 from "/public/portfolio/int49.png";
import pic69 from "/public/portfolio/int50.png";
import pic70 from "/public/portfolio/int51.png";
import pic71 from "/public/portfolio/int52.png";
import pic72 from "/public/portfolio/int53.png";
import pic73 from "/public/portfolio/int55.png";
import pic114 from "/public/portfolio/int56.png";
import pic74 from "/public/portfolio/int57.png";
import pic75 from "/public/portfolio/int58.png";
import pic76 from "/public/portfolio/int59.png";
import pic77 from "/public/portfolio/int60.png";
import pic78 from "/public/portfolio/int61.png";
import pic79 from "/public/portfolio/int62.png";
import pic80 from "/public/portfolio/int63.png";
import pic81 from "/public/portfolio/int64.png";
import pic82 from "/public/portfolio/int65.png";
import pic83 from "/public/portfolio/int66.png";
import pic84 from "/public/portfolio/int67.png";
import pic93 from "/public/portfolio/int68.png";
import pic89 from "/public/portfolio/int69.png";
import pic90 from "/public/portfolio/int70.png";
import pic91 from "/public/portfolio/int71.png";
import pic92 from "/public/portfolio/int72.png";
import pic94 from "/public/portfolio/int73.png";
import pic95 from "/public/portfolio/int74.png";
import pic96 from "/public/portfolio/int75.png";
import pic97 from "/public/portfolio/int76.png";
import pic98 from "/public/portfolio/int77.png";
import pic99 from "/public/portfolio/int78.png";
import pic100 from "/public/portfolio/int79.png";
import pic101 from "/public/portfolio/int80.png";
import pic102 from "/public/portfolio/int81.png";
import pic103 from "/public/portfolio/int82.png";
import pic104 from "/public/portfolio/int83.png";
import pic105 from "/public/portfolio/int84.png";
import pic106 from "/public/portfolio/int85.png";
import pic107 from "/public/portfolio/int89.png";
import pic108 from "/public/portfolio/int90.png";
import pic109 from "/public/portfolio/int91.png";
import pic110 from "/public/portfolio/int92.png";
import pic111 from "/public/portfolio/int93.png";
import pic112 from "/public/portfolio/int94.png";
import pic113 from "/public/portfolio/int95.png";

const createSlug = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const images = [
  {
    id: 1,
    img: pic1,

    slug: createSlug("frist image slug"),
    imgs: [pic1, pic2, pic3, pic4, pic5, pic6],
    type: "interior",
  },
  {
    id: 2,
    img: pic2,
    slug: createSlug("sec image slug"),
    imgs: [pic2, pic7, pic8, pic9, pic10, pic11],
    type: "interior",
  },
  {
    id: 3,
    img: pic3,
    slug: createSlug("third image slug"),
    imgs: [pic1, pic3, pic4, pic5, pic6, pic8],
    type: "construction",
  },
  {
    id: 4,
    img: pic4,
    slug: createSlug("four image slug"),
    imgs: [pic4, pic5, pic7, pic15, pic16, pic14],
    type: "construction",
  },
  {
    id: 5,
    img: pic5,
    slug: createSlug("five image slug"),
    imgs: [pic5, pic13, pic12, pic10, pic2, pic9],
    type: "interior",
  },
  {
    id: 6,
    img: pic6,
    slug: createSlug("six image slug"),
    imgs: [pic6, pic7, pic8, pic10, pic16, pic12],
    type: "interior",
  },
  {
    id: 7,
    img: pic7,
    slug: createSlug("seven image slug"),
    imgs: [pic7, pic13, pic1, pic10, pic15, pic16],
    type: "interior",
  },
  {
    id: 8,
    img: pic8,
    slug: createSlug("eight image slug"),
    imgs: [pic8, pic10, pic16, pic15, pic1, pic9],
    type: "interior",
  },
  {
    id: 9,
    img: pic9,
    slug: createSlug("nine image slug"),
    imgs: [pic9, pic13, pic12, pic8, pic2, pic9],
    type: "interior",
  },
  {
    id: 10,
    img: pic18,
    slug: createSlug("ten image slug"),
    imgs: [pic17, pic18, pic19, pic20, pic21, pic22],
    type: "construction",
  },
  {
    id: 11,
    img: pic23,
    slug: createSlug("eleven image slug"),
    imgs: [pic23, pic24, pic25, pic26, pic27, pic28],
    type: "interior",
  },
  {
    id: 12,
    img: pic29,
    slug: createSlug("twelve image slug"),
    imgs: [pic29, pic30, pic31, pic32, pic33, pic34],
    type: "interior",
  },
  {
    id: 13,
    img: pic35,
    slug: createSlug("thirteen image slug"),
    imgs: [pic35, pic36, pic37, pic38, pic39, pic40],
    type: "interior",
  },
  {
    id: 14,
    img: pic41,
    slug: createSlug("fourteen image slug"),
    imgs: [pic41, pic42, pic43, pic44, pic45, pic46],
    type: "interior",
  },
  {
    id: 15,
    img: pic47,
    slug: createSlug("fiveteen image slug"),
    imgs: [pic47, pic48, pic49, pic50, pic51, pic52],
    type: "interior",
  },
  {
    id: 16,
    img: pic53,
    slug: createSlug("sixteen image slug"),
    imgs: [pic53, pic54, pic55, pic56, pic57, pic58],
    type: "interior",
  },
  {
    id: 17,
    img: pic59,
    slug: createSlug("seventeen image slug"),
    imgs: [pic59, pic60, pic61, pic62, pic63, pic64],
    type: "interior",
  },
  {
    id: 18,
    img: pic65,
    slug: createSlug("eightteen image slug"),
    imgs: [pic65, pic66, pic67, pic68, pic69, pic70],
    type: "interior",
  },
  {
    id: 19,
    img: pic71,
    slug: createSlug("nineteen image slug"),
    imgs: [pic71, pic72, pic73, pic55, pic59, pic62],
    type: "interior",
  },
  {
    id: 20,
    img: pic74,
    slug: createSlug("tweenty image slug"),
    imgs: [pic74, pic75, pic76, pic77, pic78, pic79],
    type: "interior",
  },
  {
    id: 21,
    img: pic80,
    slug: createSlug("tweentyone image slug"),
    imgs: [pic80, pic81, pic82, pic83, pic84, pic89],
    type: "interior",
  },
  {
    id: 22,
    img: pic90,
    slug: createSlug("tweentytwo image slug"),
    imgs: [pic90, pic91, pic92, pic93, pic94, pic95],
    type: "interior",
  },
  {
    id: 23,
    img: pic96,
    slug: createSlug("tweentythree image slug"),
    imgs: [pic96, pic97, pic98, pic99, pic100, pic101],
    type: "interior",
  },
  {
    id: 24,
    img: pic102,
    slug: createSlug("tweentyfour image slug"),
    imgs: [pic102, pic103, pic104, pic105, pic106, pic107],
    type: "interior",
  },
  {
    id: 25,
    img: pic108,
    slug: createSlug("tweentyfive image slug"),
    imgs: [pic108, pic109, pic110, pic111, pic112, pic113],
    type: "interior",
  },
  {
    id: 26,
    img: pic114,
    slug: createSlug("tweentysix image slug"),
    imgs: [pic114, pic89, pic100, pic69, pic90, pic82],
    type: "interior",
  },
];
