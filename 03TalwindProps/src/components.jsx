import React from 'react';
function Component(props) 
{
return(<>
<div className='m-8'>

 
     <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto " src={props.img} alt="" width="384" height="512" />
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        {props.description}
      </p>
    </blockquote>
    <figcaption class="font-m">
      <div>
        {props.author}
      </div>
      <div>
       {props.title}
      </div>
    </figcaption>
  </div>
</figure>
</div>
</>)
}

export default Component