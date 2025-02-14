//Merged sort is basically based on DIVIDE AND CONQUER RULE
// First we have to divide the whole array into smaller parts.
//a. si --> mid and another one is b. mid+1 --> ei
//Then we have to follow this steps until we get a single elements
//then we have to sort that indivitual arrays
//then put it into an empty array which is a merged array and a sorted array too
//this is the conquer step and thus we can easily do the merge sort

var beep = new Audio('beep3.mp3')
var mouseclick = new Audio('Mouseclick.mp3')
var done = new Audio('wrong.mp3')
const MergeSortButton = document.querySelector(".MergeSort");

MergeSortButton.addEventListener('click', async function () {
   // headingchange1.textContent = "Merge Sort";
   selectText.innerHTML = `Merge Sort..`
   mouseclick.play()
   const description = document.querySelector('#description')
   description.style.display = 'flex'
   const section = document.querySelector('#fullbody')
   section.style.height = '184vh'

   await descriptionText_merge();
   let element = document.querySelectorAll('.bar');
   let si = 0;
   let ei = parseInt(element.length) - 1;
   disableSortingBtn();
   disableSizeSlider();
   disableNewArrayBtn();

   await MergeSort(element, si, ei);
   selectText.innerHTML=`Sorting Complete!`
   done.play();
   // enableSortingBtn();
   // enableSizeSlider();
   enableNewArrayBtn();

});



async function descriptionText_merge() {
   const section = document.querySelector('#fullbody')
   section.style.height = `184vh`

   const description = document.querySelector('#description')
   description.style.display = 'flex'

   const code = document.querySelector('.language-java')
   // console.log(code.innerHTML)
   code.innerHTML = `<pre style="font-family: 'Montserrat', serif"><b>//C++ code for Merge Sort</b>
class MergeSort {
   void merge(int arr[], int l, int m, int r)
{
   int n1=m-l+1;
   int n2=r-m;
   int L(n1);
   int R(n2);
   for(int i=0;i < n1;++i) L[i]=arr[l+i];
   for(int j=0;j < n2;++j) R[j]=arr[m+1+j];
   int i=0,j=0;
   int k=l;
   while(i < n1 && j < n2){
      if(L[i]<=R[j]){
         arr[k]=L[i];
         i++;
      }
      else{
         arr[k]=R[j];
         j++;
      }
      k++;
   }
   while(i < n1){
      arr[k]=L[i];
      i++;
      k++;
   }
   while(j < n2){
      arr[k]=R[j];
      j++;
      k++;
   }
}
   void sort(int arr[], int l, int r)
{
   if(l < r){
      int m = l + (r - l) / 2;
      sort(arr, l, m);
      sort(arr, m + 1, r);
      merge(arr, l, m, r);
   }
}
};
</pre>`
   const time = document.querySelector('#time')
   time.innerHTML = `<pre style="font-family: 'Montserrat', serif"><b>Time Complexity</b>: O(N log(N))
</pre>`

   const space = document.querySelector('#space')
   space.innerHTML = `<pre style="font-family: 'Montserrat', serif"><b>Auxiliary Space</b>: O(n)
</pre>`


}









//Divide

async function MergeSort(element, si, ei) {
   if (si >= ei) {
      return;

   }
   const middle = si + Math.floor((ei - si) / 2);
   await MergeSort(element, si, middle);
   await MergeSort(element, middle + 1, ei);

   await Merge(element, si, middle, ei);          // si--> starting index and ei --> ending index

}

//Conquer

async function Merge(element, low, mid, high) {


   const a1 = mid - low + 1;
   const a2 = high - mid;
   let left = new Array(a1);
   let right = new Array(a2);

   for (let i = 0; i < a1; i++) {
      await waitforme(delay);
      beep.play();
      element[low + i].style.background = 'red';
      left[i] = element[low + i].style.height;


   }


   for (let i = 0; i < a2; i++) {
      await waitforme(delay);
      beep.play();
      element[mid + 1 + i].style.background = 'yellow';
      right[i] = element[mid + 1 + i].style.height;
   }
   await waitforme(delay);



   let i = 0, j = 0, k = low;
   while (i < a1 && j < a2) {
      beep.play();
      await waitforme(delay);
      if (parseInt(left[i]) <= parseInt(right[j])) {
         if ((a1 + a2) === element.length) {
            element[k].style.background = '#A4B465';
         }

         else {
            element[k].style.background = 'darkgreen';



         }

         element[k].style.height = left[i];

         i++;
         k++;

      }

      else {
         if ((a1 + a2) === element.length) {
            element[k].style.background = '#A4B465';
         }
         else {
            element[k].style.background = 'darkgreen';
         }

         element[k].style.height = right[j];
         j++;
         k++;
      }

   }
   while (i < a1) {
      beep.play();
      await waitforme(delay);
      if ((a1 + a2) === element.length) {
         element[k].style.background = '#A4B465'
      }
      else {
         element[k].style.background = 'darkgreen';

      }
      element[k].style.height = left[i];
      i++;
      k++;
   }

   while (j < a2) {
      beep.play();
      await waitforme(delay);
      if ((a1 + a2) === element.length) {
         element[k].style.background = '#A4B465';
      }
      else {
         element[k].style.background = 'darkgreen';

      }

      element[k].style.height = right[j];
      j++;
      k++;
   }

}

