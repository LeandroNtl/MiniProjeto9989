import { StyledForm, FormField, FormLabel, FormInput, FormButton } from './style';

const Form = () => {

    return (

        <StyledForm>

                <h1>Feedback</h1>
                
                <FormField>
                    <FormLabel htmlFor="name">Nome</FormLabel>
                    <FormInput type="text" id="name" name="name" placeholder="Enter your name" />
                </FormField>
    
                <FormField>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormInput type="email" id="email" name="email" placeholder="Enter your email" />
                </FormField>
    
                <FormField height="200px">
                    <FormLabel htmlFor="message">Message</FormLabel>
                    <FormInput as="textarea" id="message" name="message" rows="5" placeholder="Enter your message" />
                </FormField>
              
                <FormButton type="submit">Send</FormButton>
              

        </StyledForm>

    );

}

export default Form;