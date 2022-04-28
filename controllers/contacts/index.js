const contactsRepository = require('../../repository/contacts')

const listContacts = async (req, res, next) => {
    const contacts = await contactsRepository.listContacts()
    res.json({ status: 'success', code: 200, payload: {contacts} })
  }
  
  const getContactById = async (req, res, next) => {
    const contact = await contactsRepository.getContactById(req.params.contactId)
    console.log(contact);
    if (contact){
      res.json({ status: 'success', code: 200, payload: {contact} })
    }
    return res.status(404).json({ status: 'error', code: 404, message: 'Not found' })
  }
  
  const addContact = async (req, res, next) => {
    const contact = await contactsRepository.addContact(req.body)
    res.status(201).json({ status: 'success', code: 201, payload: {contact} })
  }

  const removeContact = async (req, res, next) => {
      try{
    const contact = await contactsRepository.removeContact(req.params.contactId)
    if (contact){
      res.json({ status: 'success', code: 200, payload: {contact} })
    }
    return res.status(404).json({ status: 'error', code: 404, message: 'Not found' })
  } catch (err) {
      next(err)
  }
}
  
  const updateContact = async (req, res, next) => {
    const contact = await contactsRepository.findByIdAndUpdate(req.params.contactId, req.body)
    if (contact){
      res.json({ status: 'success', code: 200, payload: {contact} })
    }
    return res.status(404).json({ status: 'error', code: 404, message: 'Not found' })
  }

    module.exports = {listContacts, getContactById, addContact, removeContact, updateContact}