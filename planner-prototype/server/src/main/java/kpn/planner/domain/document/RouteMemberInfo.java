package kpn.planner.domain.document;

import java.util.ArrayList;
import java.util.List;

public class RouteMemberInfo {

	private Long id;
	private String memberType;
	private Boolean isWay;
	private List<Object> nodes; // RouteNetworkNodeInfo
	private String linkName;
	private String from;
	private Long fromNodeId;
	private String to;
	private Long toNodeId;
	private String role;
	private String timestamp;
	private Boolean isAccessible;
	private String length;
	private String nodeCount;
	private String description;
	private String oneWay;
	private List<Object> oneWayTags; // Tags

	public List<Object> getOneWayTags() {
		return oneWayTags;
	}

	public void setOneWayTags(ArrayList<Object> oneWayTags) {
		this.oneWayTags = oneWayTags;
	}

	public String getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(String timestamp) {
		this.timestamp = timestamp;
	}

	public String getLinkName() {
		return linkName;
	}

	public void setLinkName(String linkName) {
		this.linkName = linkName;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getOneWay() {
		return oneWay;
	}

	public void setOneWay(String oneWay) {
		this.oneWay = oneWay;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Boolean getIsAccessible() {
		return isAccessible;
	}

	public void setIsAccessible(Boolean isAccessible) {
		this.isAccessible = isAccessible;
	}

	public String getNodeCount() {
		return nodeCount;
	}

	public void setNodeCount(String nodeCount) {
		this.nodeCount = nodeCount;
	}

	public String getTo() {
		return to;
	}

	public void setTo(String to) {
		this.to = to;
	}

	public String getMemberType() {
		return memberType;
	}

	public void setMemberType(String memberType) {
		this.memberType = memberType;
	}

	public Long getToNodeId() {
		return toNodeId;
	}

	public void setToNodeId(Long toNodeId) {
		this.toNodeId = toNodeId;
	}

	public Boolean getIsWay() {
		return isWay;
	}

	public void setIsWay(Boolean isWay) {
		this.isWay = isWay;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public List<Object> getNodes() {
		return nodes;
	}

	public void setNodes(ArrayList<Object> nodes) {
		this.nodes = nodes;
	}

	public Long getFromNodeId() {
		return fromNodeId;
	}

	public void setFromNodeId(Long fromNodeId) {
		this.fromNodeId = fromNodeId;
	}

	public String getFrom() {
		return from;
	}

	public void setFrom(String from) {
		this.from = from;
	}

	public String getLength() {
		return length;
	}

	public void setLength(String length) {
		this.length = length;
	}
}