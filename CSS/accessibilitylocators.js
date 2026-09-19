//Accessibility locators 
/*
getByRole() to locate by explicit and implicit accessibility attributes.
getByText() to locate by text content.
getByLabel() to locate a form control by associated label's text.
getByPlaceholder() to locate an input by placeholder.
getByAltText() to locate an element, usually image, by its text alternative.
getByTitle() to locate an element by its title attribute.
getByTestId() to locate an element based on its data-testid attribute


getByRole('textbox', { name: 'Email' })
getByText('Login', { exact: true })
getByLabel('Username').fill('my_user') //label,field name
getByPlaceholder('Mobile number,username or email').fill('my_user') //textmessage highlighted in the textbox
getByAltText('Login Icon').click() //clicking on links,icon
getByTitle('Login').click()
getByTestId('username-input').fill('my-user');
















*/