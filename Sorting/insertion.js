var beep = new Audio('beep3.mp3')
var mouseclick = new Audio('Mouseclick.mp3')
var done = new Audio('wrong.mp3')



const InsertionSortButton = document.querySelector(".InsertionSort");
InsertionSortButton.addEventListener('click', async function () {
    // headingchange1.textContent = "Insertion Sort";
    selectText.innerHTML = `Insertion Sort..`
    mouseclick.play()
    const description = document.querySelector('#description')
    description.style.display = 'flex'
    const section = document.querySelector('#fullbody')
    section.style.height = '184vh'
    await descriptionText_insertion();


    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await InsertionSort();
    // enableSortingBtn();
    // enableSizeSlider();
    enableNewArrayBtn();
});



async function descriptionText_insertion() {
    const section = document.querySelector('#fullbody')
    section.style.height = `184vh`

    const description = document.querySelector('#description')
    description.style.display = 'flex'

    const code = document.querySelector('#code_java')
    // console.log(code.innerHTML)
    code.innerHTML = `<pre style="font-family: 'Montserrat', serif"><b>//C++ code for implementation of Insertion Sort</b>

class InsertionSort {
    void sort(int arr[])
{
    int n=arr.size();
    for(int i=1;i<n;++i){
        int key=arr[i];
        int j=i-1;
        while(j>=0 && arr[j]>key){
            arr[j+1]=arr[j];
            j=j-1;
        }
        arr[j + 1]=key;
    }
}
};
</pre>`
    const time = document.querySelector('#time')
    time.innerHTML = `<pre style="font-family: 'Montserrat', serif">
<b>Time Complexity</b>: O(N^2)
</pre>`

    const space = document.querySelector('#space')
    space.innerHTML = `<pre style="font-family: 'Montserrat', serif">
<b>Auxiliary Space</b>: O(1)
    </pre>`


}


async function InsertionSort() {
    const element = document.querySelectorAll('.bar');
    element[0].style.background = 'cyan';
    for (let i = 1; i < element.length; i++) {
        let j = i - 1;
        let p = element[i].style.height;
        element[i].style.background = 'rgb(250, 5, 54)';
        await waitforme(delay);

        while (j >= 0 && (parseInt(element[j].style.height) > parseInt(p))) {
            element[j].style.background = 'rgb(245, 212, 24)';
            element[j + 1].style.height = element[j].style.height;
            j--;
            beep.play();
            await waitforme(delay);

            for (let k = i; k >= 0; k--) {
                element[k].style.background = '#A4B465';

            }
        }
        element[j + 1].style.height = p;
        element[i].style.background = '#A4B465';
    }
    selectText.innerHTML=`Sorting Complete!`
    done.play();
}
