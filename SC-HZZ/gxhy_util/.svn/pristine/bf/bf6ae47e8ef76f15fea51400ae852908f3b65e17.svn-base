package com.gxhy.base.util.type;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.TypeHandler;

/**
 * mybatis字符串空数据返回handler
 * @author fdw
 */
public class BatisDateLongHandler implements TypeHandler<Long> {
	
	@Override
    public Long getResult(ResultSet rs, String columnName) throws SQLException {
		Long lInfo= (rs.getTimestamp(columnName)==null)? null:rs.getTimestamp(columnName).getTime();
		return lInfo;
    }
 
    @Override
    public Long getResult(ResultSet rs, int columnIndex) throws SQLException {
    	Long lInfo= (rs.getTimestamp(columnIndex)==null)? null:rs.getTimestamp(columnIndex).getTime();
		return lInfo;
    }
    
    @Override
    public Long getResult(CallableStatement cs, int columnIndex)   throws SQLException {
    	Long lInfo= (cs.getTimestamp(columnIndex)==null)? null:cs.getTimestamp(columnIndex).getTime();
		return lInfo;
    }
    
	@Override
	public void setParameter(PreparedStatement ps, int i, Long parameter,
			JdbcType jdbcType) throws SQLException {
		// TODO Auto-generated method stub 
		
	}
}