import React from 'react'

function Pagination (props){
    const {postPerPage, totalPost, changePage} = props
    // console.log(postPerPage,'<<>>')
    // console.log(totalPost.length,'<<>>')
   
    const currentPage = (event,number)=>{
        event.preventDefault()
        // console.log(number,'<<<<<<<<<<<')
        // console.log(changePage)
        changePage(number)
    }

   let pageNumber = []

    for(let i = 0; i<= Math.ceil(totalPost.length/postPerPage);i++){
        pageNumber.push(i)
    }
    return(
        <>
        <nav>
            <ul className="pagination">
                {/* <a>ini pagenation</a> */}
                {pageNumber.map(number=>{
                    return(
                    <li key={number} className="page-item"> 
                    <a href="!#" className="page-link" onClick={(event)=> currentPage(event,number)}>
                      {number}
                    </a>
                    </li>
                    )
                })}
            </ul>
        </nav>
        </>
    )

}

export default Pagination