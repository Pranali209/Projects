const change = (event) =>
{
  clickedDiv = event.target; // we are passing the event on every click and  den selecting the  element by doing event.target
  const computatedStyle = window.getComputedStyle(clickedDiv);// this line will give the style of the selected div
  document.body.style.backgroundColor  = computatedStyle.backgroundColor;

}