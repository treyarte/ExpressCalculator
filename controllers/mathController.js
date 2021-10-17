const ExpressError = require('../helpers/expressError');
const Calculator = require('../models/calculator');
/**
 * Math controller class for complex calculations
 */
class mathController {
    
    /**
     * Calculate the mean of an array of numbers
     * @param {number} numArr 
     * @returns number
     */
    async mean(req, res, next){
    // Handle validation
    try {
        const {numbers} = req.body;
        const mean = Calculator.mean(numbers);
        return res.status(200).json({mean});

      } catch (error) {
        return next(error);
      }
      
    }

        /**
     * Calculate the median of an array of numbers
     * @param {number} numArr 
     * @returns number
     */
         async median(req, res, next){
          // Handle validation
          try {
              const {numbers} = req.body;
              const median = Calculator.median(numbers);
              return res.status(200).json({median});
      
            } catch (error) {
              return next(error);
            }
            
          }


              /**
     * Calculate the mode of an array of numbers
     * @param {number} numArr 
     * @returns number
     */
    async mode(req, res, next){
      // Handle validation
      try {
          const {numbers} = req.body;
          const mode = Calculator.mode(numbers);
          return res.status(200).json({mode});
  
        } catch (error) {
          return next(error);
        }
        
      }
}

module.exports = new mathController();