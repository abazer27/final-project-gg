import { screen } from "@testing-library/react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Track from "..";
import {trackTest, testUri, testSetUri} from './dataDummy'

test('should display image song', () => {
    render (
    <Track 
        tracks = {trackTest}
        selectUri ={testUri}
        setSelectUri={testSetUri}
    />
    );
    
    const testImg = screen.getByTestId('imgID');
    const testTitle = screen.getByTestId('titleID')
    const testArtist =screen.getByTestId('artistID')
    const testAlbum = screen.getByTestId('albumID')
    const testBtn = screen.getByTestId('btnID')
    expect (testImg).toBeInTheDocument();
    expect (testTitle).toBeInTheDocument();
    expect (testArtist).toBeInTheDocument();
    expect (testAlbum).toBeInTheDocument();
    expect (testBtn).toBeInTheDocument();
    userEvent.click(testBtn);
    expect (screen.getByText('Deselect')).toBeInTheDocument;
})
