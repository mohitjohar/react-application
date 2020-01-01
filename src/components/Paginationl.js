import React, { useState, useEffect } from 'react';
const Paginationl = ({ data, maxitem, setFilterarr, maxbtn }) => {
  //setFilterarr = filtered data
  //maxitem = number of items in single page
  //maxbtn = number of button in single pagination

  //next prev counter
  const [nxps, setNxps] = useState(1);
  // active page state
  const [active, setActive] = useState(1);
  //filtered nav button
  const [fnav, setFnav] = useState('');

  // Pagination Function
  const paginate = (array, page_size, page_number) => {
    --page_number; // because pages logically start with 1, but technically with 0
    return array.slice(page_number * page_size, (page_number + 1) * page_size);
  };

  //using this function get only integer value if reminder is not zero then incerese to 1
  const divider = (dl, max) => {
    if (dl % max == 0) {
      return dl / max;
    } else {
      return parseInt(dl / max) + 1;
    }
  };

  //number of pages
  var pagedvd = divider(data.length, maxitem);
  var paginatepage = [];
  for (var i = 1; i <= pagedvd; i++) {
    paginatepage.push(i);
  }
  //paginatepage.length = number of button
  //navdvd = number of buttons in single nav
  var navdvd = divider(paginatepage.length, maxbtn);

  const Datashow = () => {
    setFilterarr(paginate(data, maxitem, active));
    setFnav(paginate(paginatepage, maxbtn, nxps));
  };

  useEffect(() => {
    Datashow();
  }, []);
  // [] is used to prevent fron infinite loop

  const step1 = s => {
    setActive(s);
    setFilterarr(paginate(data, maxitem, s));
  };

  const Next = () => {
    setNxps(nxps + 1);
    if (nxps == navdvd) {
      setNxps(1);
      setFnav(paginate(paginatepage, maxbtn, nxps - 1));
    }
    setFnav(paginate(paginatepage, maxbtn, nxps));
  };

  const Prev = () => {
    setNxps(nxps - 1);
    if (nxps == 1) {
      setNxps(navdvd);
      setFnav(paginate(paginatepage, maxbtn, nxps + 1));
    }
    setFnav(paginate(paginatepage, maxbtn, nxps));
  };

  const pagenav =
    fnav &&
    fnav.map((d, i) => {
      if (d == active) {
        return (
          <li className="nav-item">
            <button className="btn btn-primary" onClick={() => step1(d)}>
              {d}
            </button>
          </li>
        );
      } else {
        return (
          <li className="nav-item">
            <button className="btn btn-success" onClick={() => step1(d)}>
              {d}
            </button>
          </li>
        );
      }
    });

  return (
    <div className="text-center">
      <button className="btn btn-primary" onClick={() => Prev()}>
        Prev
      </button>
      <ul className="pagination-ul">{pagenav}</ul>
      <button className="btn btn-primary" onClick={() => Next()}>
        Next
      </button>
      page divider{pagedvd}
      <br />
      nav divider{navdvd}
    </div>
  );
};

export default Paginationl;
