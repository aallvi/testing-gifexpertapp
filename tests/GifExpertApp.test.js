import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('pruebas GifExpertApp', () => { 


  
    test('should add category', () => { 

        render( <GifExpertApp /> )

        // screen.debug()

        const input= screen.getByRole('textbox')
        const form= screen.getByRole('form')

        fireEvent.input(input , { target : { value: 'Saitama'}})
        fireEvent.submit( form)

        fireEvent.input(input , { target : { value: 'Goku'}})

        fireEvent.submit( form)

        screen.debug()


        expect(screen.getAllByRole('heading', { level:3}).length).toBe(3)





     })
    test('should not add category if category already exist', () => { 

        render( <GifExpertApp /> )

        // screen.debug()

        const input= screen.getByRole('textbox')
        const form= screen.getByRole('form')

        fireEvent.input(input , { target : { value: 'Saitama'}})
        fireEvent.submit( form)

        fireEvent.input(input , { target : { value: 'Saitama'}})

        fireEvent.submit( form)

        screen.debug()


        expect(screen.getAllByRole('heading', { level:3}).length).toBe(2)





     })


 })