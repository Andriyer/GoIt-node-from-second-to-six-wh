const contactsService = require ('../../services/contacts')

const listContacts = async (req, res) => {
    const contacts = await contactsService.getAll(req.query, req.user)
    res.json({ status: 'success', code: 200, payload: {contacts} })
  }
  
  const getContactById = async (req, res) => {
    const contact = await contactsService.getById(req.params.contactId, req.user)
      res.json({ status: 'success', code: 200, payload: {contact} })
  }
  
  const addContact = async (req, res) => {
    const contact = await contactsService.create(req.body, req.user)
    res.status(201).json({ status: 'success', code: 201, payload: {contact} })
  }

  const removeContact = async (req, res) => {
    const contact = await contactsService.remove(req.params.contactId, req.user)
    if (contact){
      res.json({ status: 'success', code: 200, payload: {contact} })
    }
}
  
  const updateContact = async (req, res) => {
    const contact = await contactsService.update(req.params.contactId, req.body, req.user)
      res.json({ status: 'success', code: 200, payload: {contact} })
  }

  const updateFavorite = async (req, res) => {
    const contact = await contactsService
    .update(req.params.contactId, req.body, req.user)
    res.json({ status: 'success', code: 200, payload: {contact} })
  }


    module.exports = {listContacts, 
        getContactById, 
        addContact, 
        removeContact, 
        updateContact, 
        updateFavorite}