package com.project.authenticationservice.security;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.project.authenticationservice.model.Users;

@SuppressWarnings("serial")
public class AppUser implements UserDetails {

	private Users user;
	private Collection<? extends GrantedAuthority> authorities;

	public AppUser(Users user) {
		super();
		this.user = user;

		List<String> role = new ArrayList<String>();
		role.add(user.getUserType());
		role.add(user.getStatus());
		this.authorities = role.stream().map(value -> new SimpleGrantedAuthority(value)).collect(Collectors.toList());
	}

	@Override
	public String getPassword() {
		return user.getPassword();
	}

	@Override
	public String getUsername() {
		return user.getUserId();
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return this.authorities;
	}
}
