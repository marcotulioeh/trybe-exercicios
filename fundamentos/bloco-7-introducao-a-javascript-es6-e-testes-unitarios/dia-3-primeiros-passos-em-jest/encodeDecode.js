const encode = (sub) => {
  let a = sub.replace(/a/g, 1);
  let e = a.replace(/e/g, 2);
  let i = e.replace(/i/g, 3);
  let o = i.replace(/o/g, 4);
  let u = o.replace(/u/g, 5);
  return u;
};

const decode = (sub) => {
  let sub1 = sub.replace(/1/g, 'a');
  let sub2 = sub1.replace(/2/g, 'e');
  let sub3 = sub2.replace(/3/g, 'i');
  let sub4 = sub3.replace(/4/g, 'o');
  let sub5 = sub4.replace(/5/g, 'u');
  return sub5;
};

module.exports = { encode, decode };
