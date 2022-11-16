
/*****************************************************************************************************************************************************************/
/* *******************************************************************Background Properties***********************************************************************/
/****************************************************************************************************************************************************************/

// Expand Background Properties 
function Expand_BG_Properties(){
  var exp = document.getElementsByClassName("background-properties");
  if(exp[0].style.display == 'none')
  {
    document.getElementById("BG_EXP").src="../5.EXTRA/Spirits/1.Icons/way-down.png";
    document.getElementById("Link_BG_EXP").href="#Background_Color";
    exp[0].style.display = "block";
  }
  else
  {
    document.getElementById("BG_EXP").src="../5.EXTRA/Spirits/1.Icons/inverted-way-down.png";
    document.getElementById("Link_BG_EXP").href="#background-properties-heading";
    exp[0].style.display = "none";
  }
}


// *******************************************************************
// 1.Background-color
// *******************************************************************

var bg_class_co = document.getElementsByClassName("back-co-class");

//display:none for all the result display
for (let i = 0; i < bg_class_co.length; i++) {
  bg_class_co[i].style.display = "none";
}

function back_co_1_func() {
  for (let i = 0; i < bg_class_co.length; i++) {
    var bg_initial_co = document.getElementById("back-co-initial");
    bg_initial_co.style.display = "none";
    if (i == 0) {
      bg_class_co[0].style.display = "block";
    } else {
      bg_class_co[i].style.display = "none";
    }
  }
}

function back_co_2_func() {
  for (let i = 0; i < bg_class_co.length; i++) {
    var bg_initial_co = document.getElementById("back-co-initial");
    bg_initial_co.style.display = "none";
    if (i == 1) {
      bg_class_co[1].style.display = "block";
    } else {
      bg_class_co[i].style.display = "none";
    }
  }
}

function back_co_3_func() {
  for (let i = 0; i < bg_class_co.length; i++) {
    var bg_initial_co = document.getElementById("back-co-initial");
    bg_initial_co.style.display = "none";
    if (i == 2) {
      bg_class_co[2].style.display = "block";
    } else {
      bg_class_co[i].style.display = "none";
    }
  }
}

function back_co_4_func() {
  for (let i = 0; i < bg_class_co.length; i++) {
    var bg_initial_co = document.getElementById("back-co-initial");
    bg_initial_co.style.display = "none";
    if (i == 3) {
      bg_class_co[3].style.display = "block";
    } else {
      bg_class_co[i].style.display = "none";
    }
  }
}
function back_co_5_func() {
  for (let i = 0; i < bg_class_co.length; i++) {
    var bg_initial_co = document.getElementById("back-co-initial");
    bg_initial_co.style.display = "none";
    if (i == 4) {
      bg_class_co[4].style.display = "block";
    } else {
      bg_class_co[i].style.display = "none";
    }
  }
}
function back_co_6_func() {
  for (let i = 0; i < bg_class_co.length; i++) {
    var bg_initial_co = document.getElementById("back-co-initial");
    bg_initial_co.style.display = "none";
    if (i == 5) {
      bg_class_co[5].style.display = "block";
    } else {
      bg_class_co[i].style.display = "none";
    }
  }
}
function back_co_7_func() {
  for (let i = 0; i < bg_class_co.length; i++) {
    var bg_initial_co = document.getElementById("back-co-initial");
    bg_initial_co.style.display = "none";
    if (i == 6) {
      bg_class_co[6].style.display = "block";
    } else {
      bg_class_co[i].style.display = "none";
    }
  }
}

// *******************************************************************
// 2.Background-image
// *********************************************************************
var bg_class_im = document.getElementsByClassName("back-im-class");

//display:none for all the result display
for (let i = 0; i < bg_class_im.length; i++) {
  bg_class_im[i].style.display = "none";
}

function back_im_1_func() {
  for (let i = 0; i < bg_class_im.length; i++) {
    var bg_initial_im = document.getElementById("back-im-initial");
    bg_initial_im.style.display = "none";
    if (i == 0) {
      bg_class_im[0].style.display = "block";
    } else {
      bg_class_im[i].style.display = "none";
    }
  }
}

function back_im_2_func() {
  for (let i = 0; i < bg_class_im.length; i++) {
    var bg_initial_im = document.getElementById("back-im-initial");
    bg_initial_im.style.display = "none";
    if (i == 1) {
      bg_class_im[1].style.display = "block";
    } else {
      bg_class_im[i].style.display = "none";
    }
  }
}

function back_im_3_func() {
  for (let i = 0; i < bg_class_im.length; i++) {
    var bg_initial_im = document.getElementById("back-im-initial");
    bg_initial_im.style.display = "none";
    if (i == 2) {
      bg_class_im[2].style.display = "block";
    } else {
      bg_class_im[i].style.display = "none";
    }
  }
}

function back_im_4_func() {
  for (let i = 0; i < bg_class_im.length; i++) {
    var bg_initial_im = document.getElementById("back-im-initial");
    bg_initial_im.style.display = "none";
    if (i == 3) {
      bg_class_im[3].style.display = "block";
    } else {
      bg_class_im[i].style.display = "none";
    }
  }
}
function back_im_5_func() {
  for (let i = 0; i < bg_class_im.length; i++) {
    var bg_initial_im = document.getElementById("back-im-initial");
    bg_initial_im.style.display = "none";
    if (i == 4) {
      bg_class_im[4].style.display = "block";
    } else {
      bg_class_im[i].style.display = "none";
    }
  }
}
function back_im_6_func() {
  for (let i = 0; i < bg_class_im.length; i++) {
    var bg_initial_im = document.getElementById("back-im-initial");
    bg_initial_im.style.display = "none";
    if (i == 5) {
      bg_class_im[5].style.display = "block";
    } else {
      bg_class_im[i].style.display = "none";
    }
  }
}
function back_im_7_func() {
  for (let i = 0; i < bg_class_im.length; i++) {
    var bg_initial_im = document.getElementById("back-im-initial");
    bg_initial_im.style.display = "none";
    if (i == 6) {
      bg_class_im[6].style.display = "block";
    } else {
      bg_class_im[i].style.display = "none";
    }
  }
}
function back_im_8_func() {
  for (let i = 0; i < bg_class_im.length; i++) {
    var bg_initial_im = document.getElementById("back-im-initial");
    bg_initial_im.style.display = "none";
    if (i == 7) {
      bg_class_im[7].style.display = "block";
    } else {
      bg_class_im[i].style.display = "none";
    }
  }
}
function back_im_9_func() {
  for (let i = 0; i < bg_class_im.length; i++) {
    var bg_initial_im = document.getElementById("back-im-initial");
    bg_initial_im.style.display = "none";
    if (i == 8) {
      bg_class_im[8].style.display = "block";
    } else {
      bg_class_im[i].style.display = "none";
    }
  }
}

//*******************************************************************
// 3.Background-Repeat
// *********************************************************************
var bg_class_re = document.getElementsByClassName("back-re-class");

//display:none for all the result display
for (let i = 0; i < bg_class_re.length; i++) {
  bg_class_re[i].style.display = "none";
}

function back_re_1_func() {
  for (let i = 0; i < bg_class_re.length; i++) {
    var bg_initial_re = document.getElementById("back-re-initial");
    bg_initial_re.style.display = "none";
    if (i == 0) {
      bg_class_re[0].style.display = "block";
    } else {
      bg_class_re[i].style.display = "none";
    }
  }
}

function back_re_2_func() {
  for (let i = 0; i < bg_class_re.length; i++) {
    var bg_initial_re = document.getElementById("back-re-initial");
    bg_initial_re.style.display = "none";
    if (i == 1) {
      bg_class_re[1].style.display = "block";
    } else {
      bg_class_re[i].style.display = "none";
    }
  }
}

function back_re_3_func() {
  for (let i = 0; i < bg_class_re.length; i++) {
    var bg_initial_re = document.getElementById("back-re-initial");
    bg_initial_re.style.display = "none";
    if (i == 2) {
      bg_class_re[2].style.display = "block";
    } else {
      bg_class_re[i].style.display = "none";
    }
  }
}

function back_re_4_func() {
  for (let i = 0; i < bg_class_re.length; i++) {
    var bg_initial_re = document.getElementById("back-re-initial");
    bg_initial_re.style.display = "none";
    if (i == 3) {
      bg_class_re[3].style.display = "block";
    } else {
      bg_class_re[i].style.display = "none";
    }
  }
}
function back_re_5_func() {
  for (let i = 0; i < bg_class_re.length; i++) {
    var bg_initial_re = document.getElementById("back-re-initial");
    bg_initial_re.style.display = "none";
    if (i == 4) {
      bg_class_re[4].style.display = "block";
    } else {
      bg_class_re[i].style.display = "none";
    }
  }
}
function back_re_6_func() {
  for (let i = 0; i < bg_class_re.length; i++) {
    var bg_initial_re = document.getElementById("back-re-initial");
    bg_initial_re.style.display = "none";
    if (i == 5) {
      bg_class_re[5].style.display = "block";
    } else {
      bg_class_re[i].style.display = "none";
    }
  }
}

//*******************************************************************
// 4.Background-Attachment
// *********************************************************************
var bg_class_at = document.getElementsByClassName("back-at-class");

//display:none for all the result display
for (let i = 0; i < bg_class_at.length; i++) {
  bg_class_at[i].style.display = "none";
}

function back_at_1_func() {
  for (let i = 0; i < bg_class_at.length; i++) {
    var bg_initial_at = document.getElementById("back-at-initial");
    bg_initial_at.style.display = "none";
    if (i == 0) {
      bg_class_at[0].style.display = "block";
    } else {
      bg_class_at[i].style.display = "none";
    }
  }
}

function back_at_2_func() {
  for (let i = 0; i < bg_class_at.length; i++) {
    var bg_initial_at = document.getElementById("back-at-initial");
    bg_initial_at.style.display = "none";
    if (i == 1) {
      bg_class_at[1].style.display = "block";
    } else {
      bg_class_at[i].style.display = "none";
    }
  }
}

function back_at_3_func() {
  for (let i = 0; i < bg_class_at.length; i++) {
    var bg_initial_at = document.getElementById("back-at-initial");
    bg_initial_at.style.display = "none";
    if (i == 2) {
      bg_class_at[2].style.display = "block";
    } else {
      bg_class_at[i].style.display = "none";
    }
  }
}
//*******************************************************************
// 5.Background-Position
// *********************************************************************
var bg_class_po = document.getElementsByClassName("back-po-class");

//display:none for all the result display
for (let i = 0; i < bg_class_po.length; i++) {
  bg_class_po[i].style.display = "none";
}

function back_po_1_func() {
  for (let i = 0; i < bg_class_po.length; i++) {
    var bg_initial_po = document.getElementById("back-po-initial");
    bg_initial_po.style.display = "none";
    if (i == 0) {
      bg_class_po[0].style.display = "block";
    } else {
      bg_class_po[i].style.display = "none";
    }
  }
}

function back_po_2_func() {
  for (let i = 0; i < bg_class_po.length; i++) {
    var bg_initial_po = document.getElementById("back-po-initial");
    bg_initial_po.style.display = "none";
    if (i == 1) {
      bg_class_po[1].style.display = "block";
    } else {
      bg_class_po[i].style.display = "none";
    }
  }
}

function back_po_3_func() {
  for (let i = 0; i < bg_class_po.length; i++) {
    var bg_initial_po = document.getElementById("back-po-initial");
    bg_initial_po.style.display = "none";
    if (i == 2) {
      bg_class_po[2].style.display = "block";
    } else {
      bg_class_po[i].style.display = "none";
    }
  }
}

function back_po_4_func() {
  for (let i = 0; i < bg_class_po.length; i++) {
    var bg_initial_po = document.getElementById("back-po-initial");
    bg_initial_po.style.display = "none";
    if (i == 3) {
      bg_class_po[3].style.display = "block";
    } else {
      bg_class_po[i].style.display = "none";
    }
  }
}
function back_po_5_func() {
  for (let i = 0; i < bg_class_po.length; i++) {
    var bg_initial_po = document.getElementById("back-po-initial");
    bg_initial_po.style.display = "none";
    if (i == 4) {
      bg_class_po[4].style.display = "block";
    } else {
      bg_class_po[i].style.display = "none";
    }
  }
}
function back_po_6_func() {
  for (let i = 0; i < bg_class_po.length; i++) {
    var bg_initial_po = document.getElementById("back-po-initial");
    bg_initial_po.style.display = "none";
    if (i == 5) {
      bg_class_po[5].style.display = "block";
    } else {
      bg_class_po[i].style.display = "none";
    }
  }
}
function back_po_7_func() {
  for (let i = 0; i < bg_class_po.length; i++) {
    var bg_initial_po = document.getElementById("back-po-initial");
    bg_initial_po.style.display = "none";
    if (i == 6) {
      bg_class_po[6].style.display = "block";
    } else {
      bg_class_po[i].style.display = "none";
    }
  }
}
function back_po_8_func() {
  for (let i = 0; i < bg_class_po.length; i++) {
    var bg_initial_po = document.getElementById("back-po-initial");
    bg_initial_po.style.display = "none";
    if (i == 7) {
      bg_class_po[7].style.display = "block";
    } else {
      bg_class_po[i].style.display = "none";
    }
  }
}
function back_po_9_func() {
  for (let i = 0; i < bg_class_po.length; i++) {
    var bg_initial_po = document.getElementById("back-po-initial");
    bg_initial_po.style.display = "none";
    if (i == 8) {
      bg_class_po[8].style.display = "block";
    } else {
      bg_class_po[i].style.display = "none";
    }
  }
}
function back_po_10_func() {
  for (let i = 0; i < bg_class_po.length; i++) {
    var bg_initial_po = document.getElementById("back-po-initial");
    bg_initial_po.style.display = "none";
    if (i == 9) {
      bg_class_po[9].style.display = "block";
    } else {
      bg_class_po[i].style.display = "none";
    }
  }
}
function back_po_11_func() {
  for (let i = 0; i < bg_class_po.length; i++) {
    var bg_initial_po = document.getElementById("back-po-initial");
    bg_initial_po.style.display = "none";
    if (i == 10) {
      bg_class_po[10].style.display = "block";
    } else {
      bg_class_po[i].style.display = "none";
    }
  }
}
// *******************************************************************
// 6.Background-origin
// *********************************************************************
var bg_class_or = document.getElementsByClassName("back-or-class");

//display:none for all the result display
for (let i = 0; i < bg_class_or.length; i++) {
  bg_class_or[i].style.display = "none";
}

function back_or_1_func() {
  for (let i = 0; i < bg_class_or.length; i++) {
    var bg_initial_or = document.getElementById("back-or-initial");
    bg_initial_or.style.display = "none";
    if (i == 0) {
      bg_class_or[0].style.display = "block";
    } else {
      bg_class_or[i].style.display = "none";
    }
  }
}

function back_or_2_func() {
  for (let i = 0; i < bg_class_or.length; i++) {
    var bg_initial_or = document.getElementById("back-or-initial");
    bg_initial_or.style.display = "none";
    if (i == 1) {
      bg_class_or[1].style.display = "block";
    } else {
      bg_class_or[i].style.display = "none";
    }
  }
}

function back_or_3_func() {
  for (let i = 0; i < bg_class_or.length; i++) {
    var bg_initial_or = document.getElementById("back-or-initial");
    bg_initial_or.style.display = "none";
    if (i == 2) {
      bg_class_or[2].style.display = "block";
    } else {
      bg_class_or[i].style.display = "none";
    }
  }
}
// *******************************************************************
// 7.Background-clip
// *********************************************************************
var bg_class_cl = document.getElementsByClassName("back-cl-class");

//display:none for all the result display
for (let i = 0; i < bg_class_cl.length; i++) {
  bg_class_cl[i].style.display = "none";
}

function back_cl_1_func() {
  for (let i = 0; i < bg_class_cl.length; i++) {
    var bg_initial_cl = document.getElementById("back-cl-initial");
    bg_initial_cl.style.display = "none";
    if (i == 0) {
      bg_class_cl[0].style.display = "block";
    } else {
      bg_class_cl[i].style.display = "none";
    }
  }
}

function back_cl_2_func() {
  for (let i = 0; i < bg_class_cl.length; i++) {
    var bg_initial_cl = document.getElementById("back-cl-initial");
    bg_initial_cl.style.display = "none";
    if (i == 1) {
      bg_class_cl[1].style.display = "block";
    } else {
      bg_class_cl[i].style.display = "none";
    }
  }
}

function back_cl_3_func() {
  for (let i = 0; i < bg_class_cl.length; i++) {
    var bg_initial_cl = document.getElementById("back-cl-initial");
    bg_initial_cl.style.display = "none";
    if (i == 2) {
      bg_class_cl[2].style.display = "block";
    } else {
      bg_class_cl[i].style.display = "none";
    }
  }
}
// *******************************************************************
// 8.Background-size
// *********************************************************************
var bg_class_si = document.getElementsByClassName("back-si-class");

//display:none for all the result display
for (let i = 0; i < bg_class_si.length; i++) {
  bg_class_si[i].style.display = "none";
}

function back_si_1_func() {
  for (let i = 0; i < bg_class_si.length; i++) {
    var bg_initial_si = document.getElementById("back-si-initial");
    bg_initial_si.style.display = "none";
    if (i == 0) {
      bg_class_si[0].style.display = "block";
    } else {
      bg_class_si[i].style.display = "none";
    }
  }
}

function back_si_2_func() {
  for (let i = 0; i < bg_class_si.length; i++) {
    var bg_initial_si = document.getElementById("back-si-initial");
    bg_initial_si.style.display = "none";
    if (i == 1) {
      bg_class_si[1].style.display = "block";
    } else {
      bg_class_si[i].style.display = "none";
    }
  }
}

function back_si_3_func() {
  for (let i = 0; i < bg_class_si.length; i++) {
    var bg_initial_si = document.getElementById("back-si-initial");
    bg_initial_si.style.display = "none";
    if (i == 2) {
      bg_class_si[2].style.display = "block";
    } else {
      bg_class_si[i].style.display = "none";
    }
  }
}

function back_si_4_func() {
  for (let i = 0; i < bg_class_si.length; i++) {
    var bg_initial_si = document.getElementById("back-si-initial");
    bg_initial_si.style.display = "none";
    if (i == 3) {
      bg_class_si[3].style.display = "block";
    } else {
      bg_class_si[i].style.display = "none";
    }
  }
}
function back_si_5_func() {
  for (let i = 0; i < bg_class_si.length; i++) {
    var bg_initial_si = document.getElementById("back-si-initial");
    bg_initial_si.style.display = "none";
    if (i == 4) {
      bg_class_si[4].style.display = "block";
    } else {
      bg_class_si[i].style.display = "none";
    }
  }
}
function back_si_6_func() {
  for (let i = 0; i < bg_class_si.length; i++) {
    var bg_initial_si = document.getElementById("back-si-initial");
    bg_initial_si.style.display = "none";
    if (i == 5) {
      bg_class_si[5].style.display = "block";
    } else {
      bg_class_si[i].style.display = "none";
    }
  }
}
function back_si_7_func() {
  for (let i = 0; i < bg_class_si.length; i++) {
    var bg_initial_si = document.getElementById("back-si-initial");
    bg_initial_si.style.display = "none";
    if (i == 6) {
      bg_class_si[6].style.display = "block";
    } else {
      bg_class_si[i].style.display = "none";
    }
  }
}

/*****************************************************************************************************************************************************************/
/* ******************************************************************* Text Properties ***********************************************************************/
/****************************************************************************************************************************************************************/

// Expand Background Properties 
function Expand_TX_Properties(){
  var exp = document.getElementsByClassName("text-properties");
  if(exp[0].style.display == 'none')
  {
    document.getElementById("TX_EXP").src="../5.EXTRA/Spirits/1.Icons/way-down.png";
    document.getElementById("Link_TX_EXP").href="#Text_Color";
    exp[0].style.display = "block";
  }
  else
  {
    document.getElementById("TX_EXP").src="../5.EXTRA/Spirits/1.Icons/inverted-way-down.png";
    document.getElementById("Link_TX_EXP").href="#text-properties-heading";
    exp[0].style.display = "none";
  }
}
