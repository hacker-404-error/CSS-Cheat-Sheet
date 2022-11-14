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
