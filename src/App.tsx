function App() {  
return (
    <>
      <div className="h-screen w-screen flex bg-stone-300 justify-center">
<div className="flex flex-col items-center m-24 w-3xl">
 <div className="text-2xl">TO DO LIST</div>
 <div className="flex w-full justify-between">
  <button className="bg-blue-400 p-2 rounded-lg text-white hover:bg-blue-600 cursor-pointer">Add</button>
  <select name="filter" id="filterlist">
<option value="Selected value">All</option>
<option value="done">done</option>
<option value="unfinished">Not finished</option>
  </select>
  
 </div>
 
 
 <div>Buttons</div>
 {/* end of buttons */}
 <div>List</div>
 {/* end list */}
</div>
</div>

    </>
  )
}

export default App
