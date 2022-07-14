import React, { useState, useEffect } from 'react';

import Markdown from 'markdown-to-jsx';



function ReadJson (props) {
        const [post, setPost] = useState('');
        useEffect(() => {
            import(`./md/${props.file_name}.md`)
                .then(res => {
                    fetch(res.default)
                        .then(res => res.text())
                        .then(res => setPost(res))
                        .catch(err => console.log(err));
                })
                .catch(err => console.log(err));
        });

		return (
            <div className="markdown-container">
                <Markdown className="markdown-post">
                    {post}
                </Markdown>
            </div>
        );

} 
export default ReadJson;
