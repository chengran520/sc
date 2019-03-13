package com.gxhy.busine.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.gxhy.base.model.Log;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.busine.domain.DictModel;
import com.gxhy.busine.persistence.DictMapper;
import com.gxhy.busine.service.DictService;

/**
 * 字典信息
 * @author cr
 *
 */
@RestController
@RequestMapping("dict/work")
@SuppressWarnings({ "unchecked", "unused" })
public class DictController {
		
	private static final Logger logger = LoggerFactory.getLogger(DictController.class);
	
	@Autowired
	private DictService dictService;
	
	/**
	 * 获取字典名称
	 * @param request
	 * @param json
	 * @return
	 */
	@RequestMapping(value = "/getBusineTypes", method = RequestMethod.GET)
	@Log(operationType = "字典信息",operationName="获取数据")
	public Object getBusineTypes(HttpServletRequest request){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("dictTp", request.getParameter("dictTp"));
		map.put(RequestModel.SQLID,DictMapper.class.getName() + ".getBusineTypes");		
		List<DictModel> dicModels=dictService.selectLists(map);
		return ResponseModel.Success(dicModels);
	}
	
}
