//1. Import Area
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


//2. Defination Area
function handler(req, res) {
  
  // Object.method().method(actualargument)
  res.status(200).json({
    
    // {Property.value} is object 
    name: `John Doe ${req.query.name}`,
    name2: `John Doe ${req.query.surname}`,
    name3: `John Doe ${req.query.age}`,
    name4: `John Doe ${req.query.skill}`,
    name5: `John Doe ${req.query.education}`,
    name6: `John Doe ${req.query.pd_rd_w}`,
    name7: `John Doe ${req.query.pd_rd_wg}`,
    name8: `John Doe ${req.query.pf_rd_r}`,
    name9: `John Doe ${req.query.pf_rd_r1}`,
    name10: `John Doe ${req.query.pd_rd_r2}`,
    name11: `John Doe ${req.query.pf_rd_p}`,
    msg:"How are you Bro.",
    addr:'India',
    testkey: req.query.name, 

  });
};


//3. export Area
export default handler;