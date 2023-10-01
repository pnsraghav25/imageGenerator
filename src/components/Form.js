import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        var submit = (e)=>{
            e.preventDefault()
            var val = document.getElementById("inp")
            var res = document.getElementById("res")
            var imgs = document.getElementById("img")
            var h3 = document.getElementById("h3")
            imgs.innerHTML=``
            if(val.value === ''){
                res.innerHTML =`Enter a Valid Number`
                h3.innerHTML= 'Enter Number to see magic'
            }
            else{
                res.innerHTML =``
                h3.innerHTML= 'Images are generated from Lorem Picum'
                for (let i = 1; i <= val.value; i++) {
                    const k =Math.ceil(Math.random()*(100))
                    var img = document.createElement("img")
                    imgs.appendChild(img)
                    img.setAttribute("src",`https://picsum.photos/id/${k}/500/500`)
                    img.className = "rounded-lg hover:outline hover:outline-slate-50 outline-offset-4 cursor-pointer transition-all duration-150 ease-in"
                }
            }
                val.value = ''
        }
        return (
        <div>
            <form className='flex flex-col items-center mt-12' action="" onSubmit={submit}>
                <div className='flex flex-col w-2/5'>
                    <label htmlFor="" className='font-semibold text-lg'>Enter a number</label>
                    <input id='inp' className='mt-2 rounded-lg p-2 px-4 bg-slate-500 focus:outline-1 focus:outline-slate-100 focus:outline outline-offset-3' type="text" name="" placeholder='Enter Number' />
                </div>
                <button className='px-4 py-2 hover:bg-slate-100 hover:text-black mt-12 rounded-lg border border-slate-50' type="submit">Generate</button>
            </form>
            <div id="res" className='text-center mt-4'></div>
            <div id="img" className='grid grid-cols-3 gap-8 my-12 px-8'>
            </div>
            <div>
                <h3 id='h3' className='font-semibold text-xl text-slate-500 text-center my-12'>Enter Number to see magic</h3>
            </div>
        </div>
        )
    }
}
