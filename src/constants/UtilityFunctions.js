import React from 'react'; // since we are using the jsx to return, so necessary to import React here.
import MenuItem from 'material-ui/MenuItem';
// later, this will be fetched from database, but for now, lets hard-code them.
const categories = ['Food', 'Medical', 'Clothes', 'Qarz-e-Hasan', 'Education'];
// import objectAssign from 'object-assign';

const UtilityFunctions = {
  getRequirementList: function(requirementsArray) {
    const requirements = requirementsArray.map((requirement, index) => {
      return requirement.trim().length > 0 ? <li key={index}>{requirement}</li>: null
    });
    return requirements;
  },

  getCategories: function() {
    const categoryList = categories.map((category, index) => {
      return <MenuItem key={index} value={category} primaryText={category} />
    });
    return categoryList;
  },

  getListingById: function(listings, id) {
    return listings.filter((listing) => listing._id == id)[0];
  }
};

export default UtilityFunctions;