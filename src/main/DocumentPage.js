import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'
import TextLoader from '../utility/TextLoader';

class DocumentPage extends Component {
    static defaultProps = {
        titleName: "",
        comment: "",
        textFile: "",
    }

    title(text) {
        return (
            <h1 style={{fontSize : "2.5em"}}>{text}<hr /></h1>
        );
    }

    //주석
    comment(text) {
        return (
            <p>{text}</p>
        );
    }

    contents(text) {
        return (
            <blockquote className="md">
                <ReactMarkdown rehypePlugins={[rehypeRaw]} children={text}/>
            </blockquote >
        );
    }

    async componentDidMount() {
        const text = await TextLoader(this.props.textFile);
        this.setState({ textData: text });
        console.log(this.state.textData);
    }

    render() {
        return (
            <>
                {this.title(this.props.titleName)}
                {this.comment(this.props.comment)}
                {this.contents(this.state.textData)}
            </>
        );
    }

    constructor(props) {
        super(props);
        this.state = { textData: null };
    }
}

export default DocumentPage;