import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from "../../../../Components/Atoms/Button/Button";

it('renders button content', () => {
    const button = <Button clicker={ () => console.log('testButton') }  content='testButton'  date={ new Date() } />
    render(button);
    expect(screen.getByText('testButton')).toBeInTheDocument();
});