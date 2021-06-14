import React from 'react';
import { render, screen } from '@testing-library/react';
import DaysUntilApp from "../../../../Components/Organisms/DaysUntilApp";

it('renders dateButtonsBox children', () => {
    render(
        <DaysUntilApp />);
        expect(screen.getByText('There are 7 days until Nathaniel can start at Sysdoc!')).toBeInTheDocument();
});