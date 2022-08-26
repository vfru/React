import React, { useState } from 'react'

export default function Fuxi() {

    const [myhtml] = useState(
        `<span>hello dangerouslySetInnerHTML
              <h2>hello</h2>
              </span>`
    )

    return (
        <div dangerouslySetInnerHTML={
            {
                __html:myhtml
            }
        } >

        </div>
    )
}
