
// src/components/TextEditor.js

import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './editor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faHeart } from '@fortawesome/free-solid-svg-icons';
import { saveAs } from 'file-saver';
import toMarkdown from 'to-markdown';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Editor = () => {
    const [content, setContent] = useState('');

    const formats = [
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'align',
    ];

    const modules = {
        toolbar: {
        container: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image',],
            [{ 'font': [] }],
            [{ 'align': [] }],
            ['clean'],
        ],
        },
    };

    useEffect(() => {
        // You can use this effect to log the current contents whenever it changes
        console.log(content);
    }, [content]);

    const handleDownload2 = () => {
        const markdownContent = toMarkdown(content);
        const blob = new Blob([markdownContent], { type: 'text/plain;charset=utf-8' });
        saveAs(blob, 'formatted_text.md');
    };

    return (
        <div className='app-container '>
            <div className="header">Easynote</div>
            <div className='container-editor container-wrapper'>
               
                <ReactQuill
                    theme="snow"
                    value={content}
                    onChange={setContent}
                    formats={formats}
                    modules={modules}
                    className='editor-space'
                />
                <div className='download-buttons'>
                    <button className='download-button btn' onClick={handleDownload2}>
                    <FontAwesomeIcon icon={faDownload} bounce className='icon-download' />
                    Download markdown file
                    </button>
                </div>
                
            </div>
            
            <div className="footer">Made with <FontAwesomeIcon className='heart-icon' icon={faHeart} style={{"color": "#e6360a"}} />
                by Kalyani
                <a target="_blank" href='https://github.com/Kalyani02072003'><FontAwesomeIcon className='github-icon' icon={faGithub} bounce /></a>
            </div>
        </div>
    );
};

export default Editor;
