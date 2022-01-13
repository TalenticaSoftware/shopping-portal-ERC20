package com.viren;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {

	@RequestMapping("home")
	public ModelAndView home() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("Home.jsp");
		return mv;
	}
	
	@RequestMapping("next")
	public ModelAndView next(@RequestParam String quantity) {
		ModelAndView mv = new ModelAndView();
		mv.addObject("quantity", quantity);
		mv.addObject("amount", 500*Integer.parseInt(quantity));
		mv.setViewName("NextPage.jsp");
		return mv;
	}
	
	
}
