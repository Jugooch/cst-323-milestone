export default class League {
  constructor({ 
    key, 
    group = '', // Provide default empty string
    title, 
    description, 
    active = false, // Assume false as default
    has_outrights = false // Assume false as default
  }) {
    this.key = key;
    this.group = group;
    this.title = title;
    this.description = description;
    this.active = active;
    this.has_outrights = has_outrights;
  }
}

