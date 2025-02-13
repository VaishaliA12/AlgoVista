console.log('binary')
var count = 0
async function binarySearch(array, n, val) {
    let low = 0, high = n - 1;
    while (low <= high) {
        await waitcount(delay)
        let mid = Math.floor((low + high) / 2)
        // console.log(mid)
        // console.log(val)
        if (array[mid].innerHTML == val) {
            array[mid].style.background = 'green'
            array[mid].style.color = '#fcfcfc'
            findedAudio.play()
            findingAudio.pause()
            count++
            console.log(count)
            const step = document.querySelector('.step')
            step.innerHTML = `${count}`
            return mid;
        }
        // if val is greater than array[mid].. schrink the left part of the array
        if (val > array[mid].innerHTML) {
            array[mid].style.background = 'red'
            array[mid].style.color = 'white'
            findingAudio.play()
            count++
            low = mid + 1;
        }
        else {
            high = mid - 1;
            array[mid].style.background = 'red'
            array[mid].style.color = 'white'
            count++
            findingAudio.play()
        }
    }
    findingAudio.pause()
    return -1
}


async function sorting(array) {
    array.sort((a, b) => {
        return a.innerHTML - b.innerHTML
    })
    return array
}

async function Arrange(Array) {
    const body = document.querySelector('#mainbody')
    while (body.firstChild) {
        body.removeChild(body.firstChild)
    }
    for (let i = 0; i < Array.length; i++) {
        body.appendChild(Array[i])
    }
}

async function descriptionText() {
    const section = document.querySelector('#fullbody')
    section.style.height = `184vh`

    const description = document.querySelector('#description')
    description.style.display = 'flex'

    const code = document.querySelector('#code_java')
    // console.log(code.innerHTML)
    code.innerHTML = `<pre style="font-family: 'Montserrat', serif"><b>//returns index at which target is found else returns -1</b>
class Solution {
    int binarySearch(int nums[],int target)
    {
        int n=nums.size();
        int left=0,right=n-1;
        while(left<=right){
          int mid=(left+right)/2;
          if(nums[mid]==target) return mid;
          else if(nums[mid]>target) right=mid-1;
          else left=mid+1;
        }
        return -1;
    }
};
</pre>`;
    const time = document.querySelector('#time')
    time.innerHTML = `<pre style="font-family: 'Montserrat', serif">
1.<b>Best-case</b>: O(1)
2.<b>Worst-case</b>: O(log n) 
3.<b>Average-case</b>: O(log n).
</pre>`

    const space = document.querySelector('#space')
    space.innerHTML = `<pre style="font-family: 'Montserrat', serif">
1.<b>Recursively</b>: O(log n)
2.<b>Iteratively</b>: O(1)
</pre>`


}

const binary = document.querySelector('#binary_Search').addEventListener('click', async () => {
    console.log('clicked')
    
    mouseclick.play()
    const array1 = document.querySelectorAll('.bars')
    // console.log(array1) provide nodelist
    let Array = []
    array1.forEach((element) => {
        Array.push(element)
    })
    // console.log(Array)

    const val = document.querySelector('#searchingVal').value
    if (val != '') {
        searchText.innerHTML=`Binary Searching..`
        await sorting(Array)
        await Arrange(Array)
        // console.log(Array)
        console.log(parseInt(val))

        await descriptionText()
        disableSortingBtn();
        disableSizeSlider();
        disableNewArrayBtn();
        var ind = await binarySearch(Array, Array.length, parseInt(val))
        // console.log(ind)
        const index = document.querySelector('.index')
        if (ind != -1) {
            searchText.innerHTML=`Searching Complete`
            index.innerHTML = `<pre style="font-family: 'Montserrat', serif">${val} is present at index no. ${ind}</pre> `
        }
        else {
            searchText.innerHTML=`Not Found!!`
            index.innerHTML = `<pre style="font-family: 'Montserrat', serif">${val} is not present in the array!!</pre>`
        }

    }
    else {
        alert('Please put Searching Value first!!')
    }
    // enableSortingBtn();
    // enableSizeSlider();
    enableNewArrayBtn();
})