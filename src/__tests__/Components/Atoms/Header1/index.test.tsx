import React from 'react';
import { render, screen } from '@testing-library/react';
import Header1 from "../../../../Components/Atoms/Header1";

it('renders header content', () => {
    render(<Header1  content='testHeader'/>);
    expect(screen.getByText('testHeader')).toBeInTheDocument();
});