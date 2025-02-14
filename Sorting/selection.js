var beep = new Audio('beep3.mp3')
var mouseclick = new Audio('Mouseclick.mp3')
var done = new Audio('wrong.mp3')

const SelectionSortButton = document.querySelector(".SelectionSort");
SelectionSortButton.addEventListener('click', async function () {
    // headingchange1.textContent = "Selection Sort";
    selectText.innerHTML = `Selection Sort..`
    mouseclick.play()
    const description = document.querySelector('#description')
    description.style.display = 'flex'
    const section = document.querySelector('#fullbody')
    section.style.height = '184vh'
    await descriptionText_selection();


    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();

    await SelectionSort();
    // enableSortingBtn();
    // enableSizeSlider();
    enableNewArrayBtn();
});

async function descriptionText_selection() {
    const section = document.querySelector('#fullbody')
    section.style.height = `184vh`

    const description = document.querySelector('#description')
    description.style.display = 'flex'

    const code = document.querySelector('#code_java')
    // console.log(code.innerHTML)
    code.innerHTML = `<pre style="font-family: 'Montserrat', serif"><b>//C++ code for implementation of Selection Sort</b>
class SelectionSort
{
void sort(int arr[])
{
    int n=arr.size();
    for(int i=0;i < n-1;i++)
    {
       int min_idx=i;
        for(int j=i+1;j < n;j++){
            if(arr[j] < arr[min_idx]) min_idx=j;
        }
        int temp=arr[min_idx];
        arr[min_idx]=arr[i];
        arr[i]=temp;
    }
}
};   
</pre>   
`
    const time = document.querySelector('#time')
    time.innerHTML = `<pre style="font-family: 'Montserrat', serif"><b>Time Complexity:</b> O(n^2)
</pre>`

    const space = document.querySelector('#space')
    space.innerHTML = `<pre style="font-family: 'Montserrat', serif"><b>Auxiliary Space:</b> O(1) </pre`


}











async function SelectionSort() {
    const element = document.querySelectorAll(".bar");
    for (let i = 0; i < element.length; i++) {
        let smallest_element_index = i;
        element[i].style.background = 'rgb(250, 5, 54)';
        for (let j = i + 1; j < element.length; j++) {
            element[j].style.background = 'rgb(245, 212, 24)';
            await waitforme(delay);

            if (parseInt(element[j].style.height) < parseInt(element[smallest_element_index].style.height)) {
                if (smallest_element_index !== i) {
                    element[smallest_element_index].style.background = 'cyan'; // 
                }
                smallest_element_index = j;
            }
            else {
                element[j].style.background = 'cyan'; //
            }
        }
        beep.play()
        await waitforme(delay);
        swapping(element[smallest_element_index], element[i]);
        element[smallest_element_index].style.background = 'cyan';
        element[i].style.background = '#A4B465';
    }
    selectText.innerHTML=`Sorting Complete!`
    done.play();
}